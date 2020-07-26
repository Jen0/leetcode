/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 *
 * https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/description/
 *
 * algorithms
 * Easy (73.28%)
 * Likes:    86
 * Dislikes: 0
 * Total Accepted:    32.3K
 * Total Submissions: 44K
 * Testcase Example:  '[1,null,3,2,4,null,5,6]'
 *
 * 给定一个 N 叉树，返回其节点值的前序遍历。
 * 
 * 例如，给定一个 3叉树 :
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 返回其前序遍历: [1,3,5,6,2,4]。
 * 
 * 
 * 
 * 说明: 递归法很简单，你可以使用迭代法完成此题吗?
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * 方法二 模拟栈
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  if (!root) return [];
  const stack = [root], res = [];
  let current;

  while (stack.length) {
    current = stack.pop();
    res.push(current.val);
    // 反方向入栈
    for (let len = current.children.length, i = len - 1; i >= 0; i--)
      current.children[i] && stack.push(current.children[i]);
  }
  return res
};
// @lc code=end


/**
 * 方法一 递归
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  if (!root) return [];
  const res = [];
  function recursion (node) {
    if (!node) return;
    res.push(node.val);
    let children = node.children;
    if (children)
      for (let i = 0; i < children.length; i++)
        recursion(children[i]);

  }
  recursion(root);
  return res
};
