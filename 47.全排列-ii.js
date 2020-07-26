/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 *
 * https://leetcode-cn.com/problems/permutations-ii/description/
 *
 * algorithms
 * Medium (59.09%)
 * Likes:    343
 * Dislikes: 0
 * Total Accepted:    70.1K
 * Total Submissions: 118.1K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个可包含重复数字的序列，返回所有不重复的全排列。
 * 
 * 示例:
 * 
 * 输入: [1,1,2]
 * 输出:
 * [
 * ⁠ [1,1,2],
 * ⁠ [1,2,1],
 * ⁠ [2,1,1]
 * ]
 * 
 */

// @lc code=start
/**
 * 相对于46题，全排列，
 * 1. 增加排序
 * 2. 增加条件筛选，过滤重复
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  if (!nums || !nums.length) return [];
  nums.sort((a, b) => a - b);
  const len = nums.length,
    res = [],
    // 子集结果栈
    path = [],
    // 对应索引的数字使用状态
    used = new Array(len).fill(false);

  const dfs = (res, nums, len, depth, path, used) => {
    // terminator
    if (depth === len) {
      res.push(path.slice());
      return;
    }

    for (let i = 0; i < len; i++) {
      // 前一个相同元素，使用状态为 未使用 或者 已使用 都可以过滤
      if (used[i] || i > 0 && nums[i] == nums[i - 1] && !used[i - 1])
        continue;
      // process
      path.push(nums[i]);
      used[i] = true;
      // drill down
      dfs(res, nums, len, depth + 1, path, used);
      // reverse
      path.pop();
      used[i] = false;
    }
  }

  dfs(res, nums, len, 0, path, used);

  return res;
};
// @lc code=end

