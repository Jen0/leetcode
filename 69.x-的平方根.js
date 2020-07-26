/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 *
 * https://leetcode-cn.com/problems/sqrtx/description/
 *
 * algorithms
 * Easy (38.75%)
 * Likes:    455
 * Dislikes: 0
 * Total Accepted:    179.8K
 * Total Submissions: 463.9K
 * Testcase Example:  '4'
 *
 * 实现 int sqrt(int x) 函数。
 * 
 * 计算并返回 x 的平方根，其中 x 是非负整数。
 * 
 * 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
 * 
 * 示例 1:
 * 
 * 输入: 4
 * 输出: 2
 * 
 * 
 * 示例 2:
 * 
 * 输入: 8
 * 输出: 2
 * 说明: 8 的平方根是 2.82842..., 
 * 由于返回类型是整数，小数部分将被舍去。
 * 
 * 
 */

// @lc code=start
/**
 * 牛顿迭代法
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let ans = 1;
  while (true) {
    let pre = ans;
    ans = ((ans + x / ans) / 2);
    if (Math.abs(ans - pre) < 1e-6) {
      return ~~ans;
    }
  }
};
// @lc code=end

/**
 * 牛顿迭代法
 * @param {number} x
 * @return {number}
 */

var mySqrt = function (x) {
  let ans = x;
  while (ans * ans > x) {
    ans = ~~((ans + x / ans) / 2)
  }
  return ans;
};

/**
 * 二分法
 * 1. 区间: [0, x / 2]
 *   或者是为了兼容0，1，区间：[0, (x / 2 + 1)]
 * 2. 移动规则:
 *    2.1 mid = (left + right + 1) / 2
 *    2.2 如果 mid * mid > x ，right 就为 mid - 1
 *    2.3 如果 mid * mid <= x，left 就为 mid
 * 3. 结果就是left
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 0, right = ~~(x / 2 + 1);
  while (left < right) {
    let mid = (left + right + 1) >>> 1;
    if (mid * mid > x) {
      right = mid - 1;
    } else {
      left = mid;
    }
  }
  return left;
};

var mySqrt = function (x) {
  return ~~Math.sqrt(x);
};