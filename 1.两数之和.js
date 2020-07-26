/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * 方法二 空间换时间 开辟一个数组或者哈希表
 * 时间复杂度O(n)
 * 空间复杂度O(n)
 * 增加数组去存放值。(效果比 map 好一点)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  if (!nums || nums.length === 0) return nums;
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (arr[nums[i]] !== undefined) return [arr[nums[i]], i];
    arr[target - nums[i]] = i;
  }
  return arr;
};
// @lc code=end

/**
 * 方法一 暴力 双层循环
 * 时间复杂度O(n^2)
 * 空间复杂度O(1)
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};
