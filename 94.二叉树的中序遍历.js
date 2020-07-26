/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/description/
 *
 * algorithms
 * Medium (71.73%)
 * Likes:    552
 * Dislikes: 0
 * Total Accepted:    183.9K
 * Total Submissions: 255.8K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的中序 遍历。
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
 * 输出: [1,3,2]
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
 * 中序遍历： 左 -> 根 -> 右
 * 1. 从最左侧的左节点开始遍历
 * 2. 返回父节点
 * 3. 走向右子节点
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  if (!root) return []
  const res = [], stack = [];
  let current = root;

  while (current || stack.length) {
    // 找到最左的一个节点开始遍历
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    res.push(current.val);
    current = current.right;
  }
  return res;
};
// @lc code=end


/**
 * 方法一 递归
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  if (!root) return []
  const res = [];
  function recursion (node) {
    node.left && recursion(node.left);
    res.push(node.val);
    node.right && recursion(node.right);
  }
  recursion(root);
  return res;
};