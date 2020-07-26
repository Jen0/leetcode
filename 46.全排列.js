/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 *
 * https://leetcode-cn.com/problems/permutations/description/
 *
 * algorithms
 * Medium (76.20%)
 * Likes:    782
 * Dislikes: 0
 * Total Accepted:    151.3K
 * Total Submissions: 198.1K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
 * 
 * 示例:
 * 
 * 输入: [1,2,3]
 * 输出:
 * [
 * ⁠ [1,2,3],
 * ⁠ [1,3,2],
 * ⁠ [2,1,3],
 * ⁠ [2,3,1],
 * ⁠ [3,1,2],
 * ⁠ [3,2,1]
 * ]
 * 
 */

// @lc code=start
/**
 * 大名鼎鼎的回溯算法
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  if (!nums || !nums.length) return [];
  const len = nums.length,
    res = [],
    // 结果栈
    path = [],
    // 数字是否使用过
    used = new Array(len).fill(false);

  const dfs = (res, nums, len, depth, path, used) => {
    if (depth === len) {
      res.push(path.slice());
      return;
    }
    for (let i = 0; i < len; i++) {
      if (used[i]) continue;
      path.push(nums[i]);
      used[i] = true;
      // 下探
      dfs(res, nums, len, depth + 1, path, used);
      // 回溯
      path.pop();
      used[i] = false;
    }
  }
  dfs(res, nums, len, 0, path, used);
  return res;
};
// @lc code=end


var permute = function (nums) {
  if (!nums || !nums.length) return [];
  const len = nums.length,
    res = [],
    // 结果栈
    path = [];

  const dfs = (res, nums, len, depth, path) => {
    if (depth === len) {
      res.push(path.slice());
      return;
    }

    for (let i = 0; i < len; i++) {
      if (~path.indexOf(nums[i])) continue;
      path.push(nums[i]);
      // 下探
      dfs(res, nums, len, depth + 1, path);
      // 回溯
      path.pop();
    }

  }
  dfs(res, nums, len, 0, path);
  return res;
};