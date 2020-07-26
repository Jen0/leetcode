/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 *
 * https://leetcode-cn.com/problems/kth-largest-element-in-an-array/description/
 *
 * algorithms
 * Medium (62.70%)
 * Likes:    607
 * Dislikes: 0
 * Total Accepted:    167.9K
 * Total Submissions: 260.6K
 * Testcase Example:  '[3,2,1,5,6,4]\n2'
 *
 * 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 * 
 * 示例 1:
 * 
 * 输入: [3,2,1,5,6,4] 和 k = 2
 * 输出: 5
 * 
 * 
 * 示例 2:
 * 
 * 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
 * 输出: 4
 * 
 * 说明: 
 * 
 * 你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。
 * 
 */

// @lc code=start


/**
 * 解题思路
 * 目前最优解，使用选择算法，快排的思想
 * 防止极端的情况，选择元素使用随机选取，这样算法复杂度也不会受到影响。
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {

  let len = nums.length, left = 0, right = len - 1;

  // 切分，交换
  const partition = (nums, l, r) => {
    // 随机选取 右侧 一个数交换
    if (l < r) {
      let random = l + ~~Math.random() * (r - l) + 1;
      swap(nums, l, random);
    }
    let i = l, j = r + 1;
    while (true) {
      while (i < j && nums[++i] < nums[l]);
      while (l < j && nums[--j] > nums[l]);
      if (i >= j) break;
      swap(nums, i, j);
    }
    swap(nums, l, j);
    return j;
  }
  // 交换
  const swap = (nums, i, j) => {
    // let temp = nums[i];
    // nums[i] = nums[j];
    // nums[j] = temp;
    [nums[i], nums[j]] = [nums[j], nums[i]]
  }

  let target = len - k;
  while (true) {
    let index = partition(nums, left, right);
    if (index < target) {
      left = index + 1;
    } else if (index > target) {
      right = index - 1;
    } else {
      return nums[target];
    }
  }
};
// @lc code=end

// [3,2,3,1,2,4,5,5,6]\n4