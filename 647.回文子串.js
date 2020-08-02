/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 *
 * https://leetcode-cn.com/problems/palindromic-substrings/description/
 *
 * algorithms
 * Medium (61.67%)
 * Likes:    290
 * Dislikes: 0
 * Total Accepted:    34.3K
 * Total Submissions: 55.2K
 * Testcase Example:  '"abc"'
 *
 * 给定一个字符串，你的任务是计算这个字符串中有多少个回文子串。
 * 
 * 具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被计为是不同的子串。
 * 
 * 示例 1:
 * 
 * 
 * 输入: "abc"
 * 输出: 3
 * 解释: 三个回文子串: "a", "b", "c".
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: "aaa"
 * 输出: 6
 * 说明: 6个回文子串: "a", "a", "a", "aa", "aa", "aaa".
 * 
 * 
 * 注意:
 * 
 * 
 * 输入的字符串长度不会超过1000。
 * 
 * 
 */

// @lc code=start
/**
 * 动态规划
 * dp方程：
 * 如果s[i] == s[j]那么说明只要dp[i+1][j-1]d是回文子串，并且i,j相邻
 * 那么是dp[i][j]也就是回文子串
 * 如果s[i] != s[j]s[i], 就不是回文子串
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  if (!s) return 0;
  let ans = 0, len = s.length;
  let dp = Array.from({ length: len },
    () => new Array(len).fill(false));
  for (let j = 0; j < len; j++) {
    for (let i = 0; i <= j; i++) {
      if (s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1])) {
        dp[i][j] = true;
        ans++;
      }
    }
  }
  return ans;
};
// @lc code=end

