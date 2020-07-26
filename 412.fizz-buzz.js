/*
 * @lc app=leetcode.cn id=412 lang=javascript
 *
 * [412] Fizz Buzz
 *
 * https://leetcode-cn.com/problems/fizz-buzz/description/
 *
 * algorithms
 * Easy (63.78%)
 * Likes:    64
 * Dislikes: 0
 * Total Accepted:    37.7K
 * Total Submissions: 58.9K
 * Testcase Example:  '1'
 *
 * 写一个程序，输出从 1 到 n 数字的字符串表示。
 * 
 * 1. 如果 n 是3的倍数，输出“Fizz”；
 * 
 * 2. 如果 n 是5的倍数，输出“Buzz”；
 * 
 * 3.如果 n 同时是3和5的倍数，输出 “FizzBuzz”。
 * 
 * 示例：
 * 
 * n = 15,
 * 
 * 返回:
 * [
 * ⁠   "1",
 * ⁠   "2",
 * ⁠   "Fizz",
 * ⁠   "4",
 * ⁠   "Buzz",
 * ⁠   "Fizz",
 * ⁠   "7",
 * ⁠   "8",
 * ⁠   "Fizz",
 * ⁠   "Buzz",
 * ⁠   "11",
 * ⁠   "Fizz",
 * ⁠   "13",
 * ⁠   "14",
 * ⁠   "FizzBuzz"
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * 取模求解
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let ans = [], modThree, modFive;
  for (let i = 1; i <= n; i++) {
    modThree = i % 3 === 0;
    modFive = i % 5 === 0;
    if (modThree && modFive) ans.push('FizzBuzz');
    else if (modThree) ans.push('Fizz');
    else if (modFive) ans.push('Buzz');
    else ans.push(String(i));
  }
  return ans;
};
// @lc code=end

