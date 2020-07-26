/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
 *
 * https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/description/
 *
 * algorithms
 * Hard (40.48%)
 * Likes:    551
 * Dislikes: 0
 * Total Accepted:    52.9K
 * Total Submissions: 125K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个非空二叉树，返回其最大路径和。
 * 
 * 本题中，路径被定义为一条从树中任意节点出发，达到任意节点的序列。该路径至少包含一个节点，且不一定经过根节点。
 * 
 * 示例 1:
 * 
 * 输入: [1,2,3]
 * 
 * ⁠      1
 * ⁠     / \
 * ⁠    2   3
 * 
 * 输出: 6
 * 
 * 
 * 示例 2:
 * 
 * 输入: [-10,9,20,null,null,15,7]
 * 
 * -10
 * / \
 * 9  20
 * /  \
 * 15   7
 * 
 * 输出: 42
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

let maxSum = 0;

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  maxSum = root.val;
  maxGain(root)
  return maxSum;
};

function maxGain (node) {
  if (!node) return 0;
  // 求得左右最大贡献值
  let leftGain = Math.max(maxGain(node.left), 0)
  let rightGain = Math.max(maxGain(node.right), 0)

  // 计算当前节点的路径和，当前节点的值 + 左节点的最大贡献值 + 右节点的最大贡献值
  let sum = node.val + leftGain + rightGain;

  // 更新最大路径和
  maxSum = Math.max(maxSum, sum);

  // 返回当前节点的最大贡献值
  return node.val + Math.max(leftGain, rightGain)
}
// @lc code=end

