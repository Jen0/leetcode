/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (62.95%)
 * Likes:    565
 * Dislikes: 0
 * Total Accepted:    162.1K
 * Total Submissions: 257K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
 * 
 * 
 * 
 * 示例：
 * 二叉树：[3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 返回其层次遍历结果：
 * 
 * [
 * ⁠ [3],
 * ⁠ [9,20],
 * ⁠ [15,7]
 * ]
 * 
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
 * 
 * 方法二 深度优先遍历
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  const res = [];
  const dfs = (res, node, level) => {
    if (!res[level]) res[level] = [node.val];
    else res[level].push(node.val);
    node.left && dfs(res, node.left, level + 1);
    node.right && dfs(res, node.right, level + 1);
  }
  dfs(res, root, 0);
  return res;
};
// @lc code=end

/**
 * 
 * 方法一 广度优先遍历
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  let res = [], deque = [root];
  while (deque.length) {
    let current, data = [];
    for (let len = deque.length, i = len - 1; i >= 0; i--) {
      current = deque.shift();
      data.push(current.val);
      current.left && deque.push(current.left);
      current.right && deque.push(current.right);
    }
    res.push(data);
  }
  return res;
};