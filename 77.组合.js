/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 *
 * https://leetcode-cn.com/problems/combinations/description/
 *
 * algorithms
 * Medium (73.84%)
 * Likes:    309
 * Dislikes: 0
 * Total Accepted:    60K
 * Total Submissions: 80.8K
 * Testcase Example:  '4\n2'
 *
 * 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
 * 
 * 示例:
 * 
 * 输入: n = 4, k = 2
 * 输出:
 * [
 * ⁠ [2,4],
 * ⁠ [3,4],
 * ⁠ [2,3],
 * ⁠ [1,2],
 * ⁠ [1,3],
 * ⁠ [1,4],
 * ]
 * 
 */

// @lc code=start
/**
 * 解题思路 回溯算法
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  if (n < 1 || k < 1 || n < k) return [];
  const res = [];
  function recursion (level, curr) {
    if (curr.length === k) {
      res.push(curr.slice());
      return;
    }
    // 优化，过滤掉剩下的层级 不够 组成k个长度的组合
    // for (let i = level; i < n + 1; i++) {
    for (let i = level; i <= n - (k - curr.length) + 1; i++) {
      curr.push(i);
      recursion(i + 1, curr);
      curr.pop();
    }
  }
  recursion(1, []);
  return res;
};
// @lc code=end

