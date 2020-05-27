/**
 * Detects instances of new Buffer(argument) where argument is any non literal value
 *
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Detect instances of new Buffer(argument) where argument is any non literal value',
      category: 'Security'
    }
  },
  create(context) {
    return {
      NewExpression: function (node) {
        if (
          node.callee.name === 'Buffer' &&
          node.arguments[0] &&
          node.arguments[0].type !== 'Literal'
        ) {
          return context.report(node, 'Found new Buffer');
        }
      }
    };
  }
};
