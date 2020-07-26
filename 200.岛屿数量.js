/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 *
 * https://leetcode-cn.com/problems/number-of-islands/description/
 *
 * algorithms
 * Medium (49.58%)
 * Likes:    671
 * Dislikes: 0
 * Total Accepted:    132.5K
 * Total Submissions: 265.9K
 * Testcase Example:  '[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]'
 *
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
 * 
 * 岛屿总是被水包围，并且每座岛屿只能由水平方向或竖直方向上相邻的陆地连接形成。
 * 
 * 此外，你可以假设该网格的四条边均被水包围。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入:
 * [
 * ['1','1','1','1','0'],
 * ['1','1','0','1','0'],
 * ['1','1','0','0','0'],
 * ['0','0','0','0','0']
 * ]
 * 输出: 1
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 * [
 * ['1','1','0','0','0'],
 * ['1','1','0','0','0'],
 * ['0','0','1','0','0'],
 * ['0','0','0','1','1']
 * ]
 * 输出: 3
 * 解释: 每座岛屿只能由水平和/或竖直方向上相邻的陆地连接而成。
 * 
 * 
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (!grid.length) return 0;
  let ans = 0;
  let n1 = grid.length;
  let n2 = grid[0].length;

  const dfs = (grid, i, j) => {
    if (grid[i][j] === '0') return;
    // 周边扩散为0
    grid[i][j] = '0';

    i > 0 && dfs(grid, i - 1, j);
    j > 0 && dfs(grid, i, j - 1);
    i < n1 - 1 && dfs(grid, i + 1, j);
    j < n2 - 1 && dfs(grid, i, j + 1);
  }

  for (let i = 0; i < n1; i++) {
    for (let j = 0; j < n2; j++) {
      if (grid[i][j] === '1') {
        dfs(grid, i, j);
        ans++;
      }
    }
  }

  return ans;
};
// @lc code=end