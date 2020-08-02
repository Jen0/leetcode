/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 *
 * https://leetcode-cn.com/problems/decode-ways/description/
 *
 * algorithms
 * Medium (23.74%)
 * Likes:    453
 * Dislikes: 0
 * Total Accepted:    59.2K
 * Total Submissions: 245.6K
 * Testcase Example:  '"12"'
 *
 * 一条包含字母 A-Z 的消息通过以下方式进行了编码：
 * 
 * 'A' -> 1
 * 'B' -> 2
 * ...
 * 'Z' -> 26
 * 
 * 
 * 给定一个只包含数字的非空字符串，请计算解码方法的总数。
 * 
 * 示例 1:
 * 
 * 输入: "12"
 * 输出: 2
 * 解释: 它可以解码为 "AB"（1 2）或者 "L"（12）。
 * 
 * 
 * 示例 2:
 * 
 * 输入: "226"
 * 输出: 3
 * 解释: 它可以解码为 "BZ" (2 26), "VF" (22 6), 或者 "BBF" (2 2 6) 。
 * 
 * 
 */

// @lc code=start
/**
 * 动态规划
 * dp状态：一维数组，长度为给定字符串的长度，每一位存储当前下标的解码次数
 * dp方程
 * 1. s[i] == '0'
 *    1.1 若(s[i - 1] == '1' || s[i - 1] == '2')则 dp[i] = dp[i - 2];
 *    1.2 其他情况为0; (e.g 30, 100, 1000...)
 * 2. s[i - 1] == '1', 则 dp[i] = dp[i - 1] + dp[i - 2]
 * 3. s[i - 1] == '2'
 *    3.1 并且 '1' <= s[i] <= '6' 则 dp[i] = dp[i - 1] + dp[i - 2]
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (!s || s[0] === '0') return 0
  let len = s.length;
  let pre = 1, cur = 1, temp;
  for (let i = 1; i < len; i++) {
    temp = cur;
    if (s[i] === '0') {
      if (s[i - 1] === '1' || s[i - 1] === '2') cur = pre;
      else return 0;
    } else if (s[i - 1] === '1')
      cur = cur + pre;
    else if (s[i - 1] === '2' && s[i] >= 1 && s[i] <= 6) {
      cur = cur + pre;
    }
    pre = temp;
  }
  return cur;
};
// @lc code=end

var numDecodings = function (s) {
  if (!s || s[0] === '0') return 0
  let len = s.length;
  let dp = new Array(len);
  dp[0] = 1;
  for (let i = 1; i < len; i++) {
    if (s[i] === '0') {
      if (s[i - 1] === '1' || s[i - 1] === '2') dp[i] = (dp[i - 2] || 1);
      else return 0;
    } else if (s[i - 1] === '1')
      dp[i] = dp[i - 1] + (dp[i - 2] || 1);
    else if (s[i - 1] === '2' && s[i] >= 1 && s[i] <= 6) {
      dp[i] = dp[i - 1] + (dp[i - 2] || 1);
    } else
      dp[i] = dp[i - 1];
  }
  return dp[len - 1];
};