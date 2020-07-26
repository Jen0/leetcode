/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
 *
 * https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row/description/
 *
 * algorithms
 * Medium (60.40%)
 * Likes:    78
 * Dislikes: 0
 * Total Accepted:    14.7K
 * Total Submissions: 24K
 * Testcase Example:  '[1,3,2,5,3,null,9]'
 *
 * 您需要在二叉树的每一行中找到最大的值。
 * 
 * 示例：
 * 
 * 
 * 输入: 
 * 
 * ⁠         1
 * ⁠        / \
 * ⁠       3   2
 * ⁠      / \   \  
 * ⁠     5   3   9 
 * 
 * 输出: [1, 3, 9]
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
 * 广度优先遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
  if (!root) return [];
  let res = [], deque = [root];

  while (deque.length) {
    let max = -Infinity, current;
    for (let len = deque.length, i = len - 1; i >= 0; i--) {
      current = deque.shift();
      max = Math.max(max, current.val);
      current.left && deque.push(current.left);
      current.right && deque.push(current.right);
    }
    res.push(max);
  }
  return res;
};
// @lc code=end



/**
 * 深度优先遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
  if (!root) return [];
  let res = [];

  const dfs = (node, level) => {
    if (res[level] === undefined)
      res.push(node.val)
    else
      res[level] = Math.max(res[level], node.val);

    node.left && dfs(node.left, level + 1)
    node.right && dfs(node.right, level + 1)
  }

  dfs(root, 0);

  return res;
};