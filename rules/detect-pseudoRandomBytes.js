/**
 * Tries to detect crypto.pseudoRandomBytes cause it's not cryptographical strong
 * @author Adam Baldwin
 */

'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Detect crypto.pseudoRandomBytes cause it\'s not cryptographical strong',
      category: 'Security'
    }
  },
  create(context) {
    return {
      MemberExpression: function (node) {
        if (node.property.name === 'pseudoRandomBytes') {
          return context.report(
            node,
            'Found crypto.pseudoRandomBytes which does not produce cryptographically strong numbers'
          );
        }
      }
    };
  }
};
