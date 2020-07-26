/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 *
 * https://leetcode-cn.com/problems/rotate-array/description/
 *
 * algorithms
 * Easy (41.79%)
 * Likes:    600
 * Dislikes: 0
 * Total Accepted:    135.7K
 * Total Submissions: 323.7K
 * Testcase Example:  '[1,2,3,4,5,6,7]\n3'
 *
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 * 
 * 示例 1:
 * 
 * 输入: [1,2,3,4,5,6,7] 和 k = 3
 * 输出: [5,6,7,1,2,3,4]
 * 解释:
 * 向右旋转 1 步: [7,1,2,3,4,5,6]
 * 向右旋转 2 步: [6,7,1,2,3,4,5]
 * 向右旋转 3 步: [5,6,7,1,2,3,4]
 * 
 * 
 * 示例 2:
 * 
 * 输入: [-1,-100,3,99] 和 k = 2
 * 输出: [3,99,-1,-100]
 * 解释: 
 * 向右旋转 1 步: [99,-1,-100,3]
 * 向右旋转 2 步: [3,99,-1,-100]
 * 
 * 说明:
 * 
 * 
 * 尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
 * 要求使用空间复杂度为 O(1) 的 原地 算法。
 * 
 * 
 */

// @lc code=start
/**
 * 方法二 暴力 
 * 时间复杂度O(n) 64 ms
 * 空间复杂度O(1)
 * 由需要移动的k个位置 得出                                           
 * 1. 截取数组最后k位元素，
 * 2. 截取的元素放置数组前面
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (!nums || !nums.length) return nums;
  nums.unshift(...nums.splice(nums.length - k));
};
// @lc code=end

/**
 * 方法五 环状替换
 * 时间复杂度O(n) 72 ms
 * 空间复杂度O(1)
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length;
  for (let i = 0, j = 0; j < nums.length; i++) {
    let current = i, previous = nums[i], next;
    do {
      current = next = (k + current) % nums.length;
      [nums[next], previous] = [previous, nums[next]];
      j++;
    } while (i !== current)
  }
};

/**
 * 方法四 开辟一个新的数组存储，然后将结果赋值给nums
 * 时间复杂度O(n) 84 ms
 * 空间复杂度O(n)
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let arr = [];
  for (let i = 0; i < nums.length; i++)
    arr[(i + k) % nums.length] = nums[i]
  for (let j = 0; j < arr.length; j++)
    nums[j] = arr[j];
};


/**
 * 方法三 移动k个位置，就将末尾取出，然后插入数组首位，进行k次操作
 * 时间复杂度O(n) 104 ms
 * 空间复杂度O(1)
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  for (let i = 0; i < k; i++)
    nums.unshift(nums.pop());
};



/**
 * 方法一 暴力
 * 时间复杂度O(k * n) 216 ms,
 * 空间复杂度O(1)
 * 由需要移动的k个位置 
 * 整个数组整体往后移动一位，移动k次
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (!nums || !nums.length) return nums;
  while (k) {
    let last = nums[nums.length - 1];
    for (let len = nums.length, i = len - 2; i >= 0; i--) {
      nums[i + 1] = nums[i];
    }
    nums[0] = last;
    k--;
  }
};