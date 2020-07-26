/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 *
 * https://leetcode-cn.com/problems/plus-one/description/
 *
 * algorithms
 * Easy (44.36%)
 * Likes:    487
 * Dislikes: 0
 * Total Accepted:    166.9K
 * Total Submissions: 375.4K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 * 
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 * 
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 * 
 * 示例 1:
 * 
 * 输入: [1,2,3]
 * 输出: [1,2,4]
 * 解释: 输入数组表示数字 123。
 * 
 * 
 * 示例 2:
 * 
 * 输入: [4,3,2,1]
 * 输出: [4,3,2,2]
 * 解释: 输入数组表示数字 4321。
 * 
 * 
 */

// @lc code=start
/**
 * 方法二 代码优化
 * 解题思路同方法一
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  if (!digits || !digits.length) return digits;
  for (let i = digits.length; i--; digits[i] = 0)
    if (digits[i]++ < 9)
      return digits;
  digits.unshift(1);
  return digits;
};

// @lc code=end



/**
 * 方法一：
 * 解题思路
 * 从末尾开始遍历数组，
 * 1. 如果小于9，就 +1，直接返回数组，
 * 2. 如果不小于9，就赋值为0，进入下一次循环
 * 3. 如果没有小于9的，就往数组开始位置插入 1
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i]++ < 9) return digits;
    digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
};