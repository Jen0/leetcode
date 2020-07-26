/*
 * @lc app=leetcode.cn id=1021 lang=javascript
 *
 * [1021] 删除最外层的括号
 *
 * https://leetcode-cn.com/problems/remove-outermost-parentheses/description/
 *
 * algorithms
 * Easy (76.92%)
 * Likes:    117
 * Dislikes: 0
 * Total Accepted:    29.9K
 * Total Submissions: 38.8K
 * Testcase Example:  '"(()())(())"'
 *
 * 有效括号字符串为空 ("")、"(" + A + ")" 或 A + B，其中 A 和 B 都是有效的括号字符串，+
 * 代表字符串的连接。例如，""，"()"，"(())()" 和 "(()(()))" 都是有效的括号字符串。
 * 
 * 如果有效字符串 S 非空，且不存在将其拆分为 S = A+B 的方法，我们称其为原语（primitive），其中 A 和 B 都是非空有效括号字符串。
 * 
 * 给出一个非空有效字符串 S，考虑将其进行原语化分解，使得：S = P_1 + P_2 + ... + P_k，其中 P_i 是有效括号字符串原语。
 * 
 * 对 S 进行原语化分解，删除分解中每个原语字符串的最外层括号，返回 S 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入："(()())(())"
 * 输出："()()()"
 * 解释：
 * 输入字符串为 "(()())(())"，原语化分解得到 "(()())" + "(())"，
 * 删除每个部分中的最外层括号后得到 "()()" + "()" = "()()()"。
 * 
 * 示例 2：
 * 
 * 输入："(()())(())(()(()))"
 * 输出："()()()()(())"
 * 解释：
 * 输入字符串为 "(()())(())(()(()))"，原语化分解得到 "(()())" + "(())" + "(()(()))"，
 * 删除每个部分中的最外层括号后得到 "()()" + "()" + "()(())" = "()()()()(())"。
 * 
 * 
 * 示例 3：
 * 
 * 输入："()()"
 * 输出：""
 * 解释：
 * 输入字符串为 "()()"，原语化分解得到 "()" + "()"，
 * 删除每个部分中的最外层括号后得到 "" + "" = ""。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * S.length <= 10000
 * S[i] 为 "(" 或 ")"
 * S 是一个有效括号字符串
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
  let k = 0, res = '';
  for (let i = 0; i < S.length; i++) {
    const c = S[i];
    if (c === '(' && k++ > 0) res += c;
    if (c === ')' && k-- > 1) res += c;
  }
  return res;
};
// @lc code=end


/**
 * 方法二 使用栈
 * 
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
  let stack = [], res = '';
  for (let j = 0; j < S.length; j++) {
    const c = S[j];
    if (c === '(') {
      stack.push(c);
      if (stack.length > 1) res += c;
    } else {
      stack.pop();
      if (stack.length) res += c;
    }
  }
  return res;
};

/**
 * 方法一 计数
 * 从第二个 左括号 开始加入 result，开始计数 +1
 * 每遇到右括号 计数 -1
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
  let i = 0, res = '';
  for (let j = 0; j < S.length; j++) {
    const c = S[j];
    if (c === ')') --i;
    if (i >= 1) res += c;
    if (c === '(') ++i;
  }
  return res;
};