/**
 * Tries to detect calls to require with non-literal argument
 * @author Adam Baldwin
 */

'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Detect calls to require with non-literal argument',
      category: 'Security'
    }
  },
  create(context) {
    return {
      CallExpression: function (node) {
        if (node.callee.name === 'require') {
          var args = node.arguments;
          if (args && args.length > 0 &&
            (args[0].type === 'TemplateLiteral' && args[0].expressions.length > 0) ||
            (args[0].type !== 'TemplateLiteral' && args[0].type !== 'Literal')) {
            return context.report(node, 'Found non-literal argument in require');
          }
        }
      }
    };

  }
};
