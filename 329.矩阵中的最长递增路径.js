/*
 * @lc app=leetcode.cn id=329 lang=javascript
 *
 * [329] 矩阵中的最长递增路径
 *
 * https://leetcode-cn.com/problems/longest-increasing-path-in-a-matrix/description/
 *
 * algorithms
 * Hard (40.93%)
 * Likes:    277
 * Dislikes: 0
 * Total Accepted:    27.4K
 * Total Submissions: 60.2K
 * Testcase Example:  '[[9,9,4],[6,6,8],[2,1,1]]'
 *
 * 给定一个整数矩阵，找出最长递增路径的长度。
 * 
 * 对于每个单元格，你可以往上，下，左，右四个方向移动。 你不能在对角线方向上移动或移动到边界外（即不允许环绕）。
 * 
 * 示例 1:
 * 
 * 输入: nums = 
 * [
 * ⁠ [9,9,4],
 * ⁠ [6,6,8],
 * ⁠ [2,1,1]
 * ] 
 * 输出: 4 
 * 解释: 最长递增路径为 [1, 2, 6, 9]。
 * 
 * 示例 2:
 * 
 * 输入: nums = 
 * [
 * ⁠ [3,4,5],
 * ⁠ [3,2,6],
 * ⁠ [2,2,1]
 * ] 
 * 输出: 4 
 * 解释: 最长递增路径是 [3, 4, 5, 6]。注意不允许在对角线方向上移动。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  if (!matrix || !matrix.length || !matrix[0].length)
    return 0;
  let m = matrix.length, n = matrix[0].length;
  let dp = Array.from({ length: m }, () => new Array(n).fill(0));
  let dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  // 深度优先遍历
  function dfs (i, j) {
    if (dp[i][j]) return dp[i][j];
    // 往四个方向扩散
    let max = 1;
    for (let k = 0; k < 4; k++) {
      let x = i + dirs[k][0], y = j + dirs[k][1];
      if (x < 0 || x >= m || y < 0 || y >= n)
        continue;
      if (matrix[x][y] <= matrix[i][j])
        continue;
      // drill down + 1
      max = Math.max(max, dfs(x, y) + 1);
    }
    return (dp[i][j] = max);
  }

  let max = 1;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      max = Math.max(max, dfs(i, j));
    }
  }
  return max;
};
// @lc code=end

