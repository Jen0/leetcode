/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 *
 * https://leetcode-cn.com/problems/next-permutation/description/
 *
 * algorithms
 * Medium (33.79%)
 * Likes:    558
 * Dislikes: 0
 * Total Accepted:    71.7K
 * Total Submissions: 210.5K
 * Testcase Example:  '[1,2,3]'
 *
 * 实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。
 * 
 * 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
 * 
 * 必须原地修改，只允许使用额外常数空间。
 * 
 * 以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
 * 1,2,3 → 1,3,2
 * 3,2,1 → 1,2,3
 * 1,1,5 → 1,5,1
 * 
 */

// @lc code=start
/**
 * 解题思路
 * 1. 先从后查找第一个小的数的索引
 * 2. 如果没有查找到，说明该数组是降序，直接反转升序即可
 * 3. 如果找到了索引是i,继续从原数组末尾查找，第一个比索引是i的数大的位置k，
 * 3.1 即交换 i,k 两位置的数交换
 * 3.2 同时，将i+1之后的数组反转即可。
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  if (nums.length < 2) return;
  let len = nums.length, i = len - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) i--;
  if (i >= 0) {
    let k = len - 1;
    while (nums[i] >= nums[k]) k--;
    [nums[i], nums[k]] = [nums[k], nums[i]];
  }
  let left = i + 1, right = len - 1;
  while (left < right)
    [nums[left++], nums[right--]] = [nums[right], nums[left]];
};
// @lc code=end

