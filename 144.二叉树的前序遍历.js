/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/description/
 *
 * algorithms
 * Medium (65.81%)
 * Likes:    297
 * Dislikes: 0
 * Total Accepted:    125.5K
 * Total Submissions: 190.3K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的 前序 遍历。
 * 
 * 示例:
 * 
 * 输入: [1,null,2,3]  
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3 
 * 
 * 输出: [1,2,3]
 * 
 * 
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
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
/**
 * 方法二 模拟栈
 * 前序遍历： 根 -> 左 -> 右
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  if (!root) return [];
  const res = [], stack = [root];
  let current;

  while (stack.length) {
    current = stack.pop();
    res.push(current.val);
    // 右边先入栈
    current.right && stack.push(current.right);
    current.left && stack.push(current.left);
  }

  return res;
};
// @lc code=end

/**
 * 方法一 递归
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  if (!root) return [];
  const res = [];

  function recursion (node) {
    res.push(node.val);
    node.left && recursion(node.left);
    node.right && recursion(node.right);
  }
  recursion(root);
  return res;
};