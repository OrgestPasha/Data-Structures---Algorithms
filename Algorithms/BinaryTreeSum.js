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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  return walk(root, targetSum, 0);
};

function walk(node, targetSum, sum) {
  if (node == null) {
    return false;
  }
  sum += node.val;

  if (node.left == null && node.right == null) {
    return sum === targetSum;
  }
  return walk(node.left, targetSum, sum) || walk(node.right, targetSum, sum);
}
