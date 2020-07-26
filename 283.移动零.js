/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 *
 * https://leetcode-cn.com/problems/move-zeroes/description/
 *
 * algorithms
 * Easy (61.16%)
 * Likes:    629
 * Dislikes: 0
 * Total Accepted:    164.4K
 * Total Submissions: 268K
 * Testcase Example:  '[0,1,0,3,12]'
 *
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 
 * 示例:
 * 
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 * 
 * 说明:
 * 
 * 
 * 必须在原数组上操作，不能拷贝额外的数组。
 * 尽量减少操作次数。
 * 
 * 
 */

// @lc code=start
/**
 * 方法三 迭代 赋值
 * 方法二的优化方案，交换变成直接赋值。
 * 迭代中，如果遇到元素不为0的，上次 j 所在的下标值 赋值为当前元素；
 * 同时当前元素赋值为0
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  for (let i = 0, j = 0, len = nums.length; i < len; i++)
    if (nums[i] !== 0) {
      if (i !== j) {
        nums[j] = nums[i];
        nums[i] = 0;
      }
      j++;
    }
};
// @lc code=end




/**
 * 方法二 迭代 交换
 * 1. 定义一个上次为 0 的索引 j ，初始化为 0
 * 2. 开始迭代
 * 2.1  如果元素不为0，就交换
 *      同时j就 + 1，
 * 2.2 优化，如果 i 和 j 不等，才交换
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  for (let i = 0, j = 0; i < nums.length; i++)
    if (nums[i]) {
      if (i !== j) {
        [nums[j], nums[i]] = [nums[i], nums[j]];
      }
      j++;
    }
};

/**
 * 方法一 暴力
 * 迭代遇到0，就将当前元素剔除，同时记录剔除的次数n，最后在数组最后加 n个删除的0；
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let n = 0;
  for (let i = 0, len = nums.length; i < len; i++)
    if (nums[i] === 0) {
      nums.splice(i--, 1);
      n++;
    }
  nums.push(...new Array(n).fill(0))
};