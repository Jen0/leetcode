/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 *
 * https://leetcode-cn.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (75.56%)
 * Likes:    1172
 * Dislikes: 0
 * Total Accepted:    150.3K
 * Total Submissions: 198.3K
 * Testcase Example:  '3'
 *
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：n = 3
 * 输出：[
 * ⁠      "((()))",
 * ⁠      "(()())",
 * ⁠      "(())()",
 * ⁠      "()(())",
 * ⁠      "()()()"
 * ⁠    ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  if (n < 1) return [];
  let res = [];
  /**
   * 
   * @param {string[]} res 
   * @param {number} n      
   * @param {number} left   左括号的次数
   * @param {number} right  右括号的次数
   * @param {string} data   生成正确的括号字符串
   */
  const generate = (res, n, left, right, data) => {
    if (left === n && right === n) res.push(data)

    if (left < n)
      generate(res, n, left + 1, right, data + '(');

    if (right < left)
      generate(res, n, left, right + 1, data + ')')

  }
  generate(res, n, 0, 0, '');
  return res;
};
// @lc code=end

