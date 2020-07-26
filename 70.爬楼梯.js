/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 *
 * https://leetcode-cn.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (49.74%)
 * Likes:    1088
 * Dislikes: 0
 * Total Accepted:    226.6K
 * Total Submissions: 455K
 * Testcase Example:  '2'
 *
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 
 * 注意：给定 n 是一个正整数。
 * 
 * 示例 1：
 * 
 * 输入： 2
 * 输出： 2
 * 解释： 有两种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶
 * 2.  2 阶
 * 
 * 示例 2：
 * 
 * 输入： 3
 * 输出： 3
 * 解释： 有三种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶 + 1 阶
 * 2.  1 阶 + 2 阶
 * 3.  2 阶 + 1 阶
 * 
 * 
 */

// @lc code=start
/**
 * 时间复杂度 O(log(n))
 * 空间复杂度 O(1)
 * 通项公式直接求得结果，运行时间却意外的占比10% - - 
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let sqrt5 = Math.sqrt(5);
  return (((1 + sqrt5) / 2) ** (n + 1) - ((1 - sqrt5) / 2) ** (n + 1)) / sqrt5
};
// @lc code=end



/**
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 * 使用滚动数组
 * f(x) = f(x−1) + f(x−2)
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let prev = 0, next = 0, total = 1;
  for (let i = 1; i <= n; i++) {
    prev = next;
    next = total;
    total = prev + next;
  }
  return total;
};


let cache = {};
/**
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 * 使用记忆，缓存递归过的值
 * f(x) = f(x−1) + f(x−2)
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (cache[n]) return cache[n]
  // 使用斐波那契递归会超时
  if (n === 1 || n === 2) return n;
  // 求出n的步数
  return (cache[n] = climbStairs(n - 1) + climbStairs(n - 2));
};