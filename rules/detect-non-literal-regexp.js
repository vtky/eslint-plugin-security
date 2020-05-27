/**
 * Tries to detect RegExp's created from non-literal strings.
 * @author Jon Lamendola
 */

'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Detect RegExp\'s created from non-literal strings',
      category: 'Security'
    }
  },
  create(context) {
    return {
      NewExpression: function (node) {
        if (node.callee.name === 'RegExp') {
          var args = node.arguments;
          if (args && args.length > 0 && args[0].type !== 'Literal') {
            return context.report(
              node,
              'Found non-literal argument to RegExp Constructor'
            );
          }
        }
      }
    };
  }
};
