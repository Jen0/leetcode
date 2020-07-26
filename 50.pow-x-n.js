/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 *
 * https://leetcode-cn.com/problems/powx-n/description/
 *
 * algorithms
 * Medium (35.92%)
 * Likes:    438
 * Dislikes: 0
 * Total Accepted:    106.9K
 * Total Submissions: 296.5K
 * Testcase Example:  '2.00000\n10'
 *
 * 实现 pow(x, n) ，即计算 x 的 n 次幂函数。
 * 
 * 示例 1:
 * 
 * 输入: 2.00000, 10
 * 输出: 1024.00000
 * 
 * 
 * 示例 2:
 * 
 * 输入: 2.10000, 3
 * 输出: 9.26100
 * 
 * 
 * 示例 3:
 * 
 * 输入: 2.00000, -2
 * 输出: 0.25000
 * 解释: 2^-2 = 1/2^2 = 1/4 = 0.25
 * 
 * 说明:
 * 
 * 
 * -100.0 < x < 100.0
 * n 是 32 位有符号整数，其数值范围是 [−2^31, 2^31 − 1] 。
 * 
 * 
 */

// @lc code=start
/**
 * 递归 分治
 * 每次向下递归，n / 2。返回结果val
 * 如果 n/2 是
 * 奇数，那么res =  val * val * x
 * 偶数，那么res =  val * val
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0) return 1;
  if (n === 1) return x;
  if (n < 0) return 1 / myPow(x, -n);
  const val = myPow(x, n >>> 1);
  return n & 1 ? val * val * x : val * val;
};
// @lc code=end

/**
 * for 循环
 * 52ms beats 99.96%
 * 解题过程
 *    n = 10  | x = 2 |  res
 * 1.   10       2^2      1
 * 2.   5        2^4      2^2
 * 3.   2        2^8      2^2
 * 4.   1        2^8      2^10
 * 
 * 对 i就行二分法遍历，每次 i /= 2 , 并且遍历一次都计算一次 x *= x；
 * 只有当 i取模不为0的时候，计算res。
 * 
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n < 0) return 1 / myPow(x, -n);
  let res = 1;
  for (let i = n; i >= 1; i >>>= 1) {
    if (i & 1) res *= x;
    if (i > 1) x *= x;
  }
  return res;
};