/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) {
    return true;
  }

  function isMirror(t1, t2) {
    if (!t1 && !t2) return true; // Both are null, so they are symmetric
    if (!t1 || !t2) return false; // One is null and the other is not
    if (t1.val !== t2.val) return false; // Values are different

    // Compare left subtree of t1 with right subtree of t2 and vice versa
    return isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
  }

  return isMirror(root.left, root.right);
};
