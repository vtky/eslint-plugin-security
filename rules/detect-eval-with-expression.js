/**
 * Identifies eval with expression
 * @author Adam Baldwin
 */

'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Identify eval with expression.',
      category: 'Security'
    }
  },
  create(context) {
    return {
      CallExpression: function (node) {
        if (node.callee.name === 'eval' && node.arguments[0].type !== 'Literal') {
          context.report(
            node,
            'eval with argument of type ' + node.arguments[0].type
          );
        }
      }
    };
  }
};
