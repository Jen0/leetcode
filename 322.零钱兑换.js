/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 *
 * https://leetcode-cn.com/problems/coin-change/description/
 *
 * algorithms
 * Medium (39.88%)
 * Likes:    721
 * Dislikes: 0
 * Total Accepted:    110.3K
 * Total Submissions: 271.8K
 * Testcase Example:  '[1,2,5]\n11'
 *
 * 给定不同面额的硬币 coins 和一个总金额
 * amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: coins = [1, 2, 5], amount = 11
 * 输出: 3 
 * 解释: 11 = 5 + 5 + 1
 * 
 * 示例 2:
 * 
 * 输入: coins = [2], amount = 3
 * 输出: -1
 * 
 * 
 * 
 * 说明:
 * 你可以认为每种硬币的数量是无限的。
 * 
 */

// @lc code=start

/**
 * 深度优先  96ms beats 94.93%
 * 解题思路
 * 1. 将零钱从大到小排列
 * 2. 优先使用金额最大的，生成所有可兑换的，取最小值
 * 3.1 ~~(amount / coins[index])  --> 最多使用几次该零钱
 * 3.2 amount - i * coins[index]  --> 剩余的金额
 * 3.3 count + i                  --> 已使用次数
 * 4. 关键剪枝条件：i + count < ans --> 次数保持最小
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (!amount) return 0;
  coins.sort((a, b) => b - a);
  let ans = Number.MAX_VALUE;

  const dfs = (coins, amount, index, count) => {
    if (amount === 0) {
      ans = Math.min(ans, count);
      return;
    }

    if (index === coins.length) return;

    for (let i = ~~(amount / coins[index]);
      i >= 0 && i + count < ans; i--) {
      dfs(coins, amount - i * coins[index], index + 1, count + i);
    }
  }

  dfs(coins, amount, 0, 0);

  return ans === Number.MAX_VALUE ? -1 : ans;
};
// @lc code=end



/**
 * 动态规划
 * 动态转移方程
 * F(i)	最小硬币数量
    F(0)	0 //金额为0不能由硬币组成
    F(1)	1 //F(1)=min(F(1-1),F(1-2),F(1-5))+1=1F(1)=min(F(1−1),F(1−2),F(1−5))+1=1
    F(2)	1 //F(2)=min(F(2-1),F(2-2),F(2-5))+1=1F(2)=min(F(2−1),F(2−2),F(2−5))+1=1
    F(3)	2 //F(3)=min(F(3-1),F(3-2),F(3-5))+1=2F(3)=min(F(3−1),F(3−2),F(3−5))+1=2
    F(4)	2 //F(4)=min(F(4-1),F(4-2),F(4-5))+1=2F(4)=min(F(4−1),F(4−2),F(4−5))+1=2
    ...	...
    F(11)	3 //F(11)=min(F(11-1),F(11-2),F(11-5))+1=3F(11)=min(F(11−1),F(11−2),F(11−5))+1=3
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (!amount) return 0;

  let dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;

  for (let i = 1; i < amount + 1; i++) {
    for (let coin of coins) {
      if (i - coin < 0) continue;
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }
  return (dp[amount] === amount + 1) ? -1 : dp[amount];
};


