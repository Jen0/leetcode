/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 *
 * https://leetcode-cn.com/problems/maximal-square/description/
 *
 * algorithms
 * Medium (42.48%)
 * Likes:    494
 * Dislikes: 0
 * Total Accepted:    64.3K
 * Total Submissions: 150.9K
 * Testcase Example:  '[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]'
 *
 * 在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。
 * 
 * 示例:
 * 
 * 输入: 
 * 
 * 1 0 1 0 0
 * 1 0 1 1 1
 * 1 1 1 1 1
 * 1 0 0 1 0
 * 
 * 输出: 4
 * 
 */

// @lc code=start
/**
 * 动态规划
 * dp状态: 存放四周是否都为'1'的状态
 * dp方程:
 * dp[i + 1][j + 1] = Math.min(dp[i][j], dp[i][j + 1], dp[i + 1][j]) + 1;
 * 取最大值
 * ans = Math.max(ans, dp[i + 1][j + 1]);
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  if (!matrix || !matrix.length || !matrix[0].length)
    return 0;

  let m = matrix.length, n = matrix[0].length;
  let ans = 0;
  let dp = Array.from({ length: m + 1 },
    () => new Array(n + 1).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === '1') {
        dp[i + 1][j + 1] =
          Math.min(dp[i][j], dp[i][j + 1], dp[i + 1][j]) + 1;
        ans = Math.max(ans, dp[i + 1][j + 1]);
      }
    }
  }
  return ans * ans;
};
// @lc code=end

