/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 *
 * https://leetcode-cn.com/problems/spiral-matrix-ii/description/
 *
 * algorithms
 * Medium (77.51%)
 * Likes:    202
 * Dislikes: 0
 * Total Accepted:    39K
 * Total Submissions: 50.2K
 * Testcase Example:  '3'
 *
 * 给定一个正整数 n，生成一个包含 1 到 n^2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。
 * 
 * 示例:
 * 
 * 输入: 3
 * 输出:
 * [
 * ⁠[ 1, 2, 3 ],
 * ⁠[ 8, 9, 4 ],
 * ⁠[ 7, 6, 5 ]
 * ]
 * 
 */

// @lc code=start
/**
 * 沿边界赋值
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let l = 0, r = n - 1, t = 0, b = n - 1;
  const ans = Array.from({ length: n }, () => []);
  let num = 1, last = n * n;
  while (num <= last) {
    for (let i = l; i <= r; i++) ans[t][i] = num++;
    t++;
    for (let i = t; i <= b; i++) ans[i][r] = num++;
    r--;
    for (let i = r; i >= l; i--) ans[b][i] = num++;
    b--;
    for (let i = b; i >= t; i--) ans[i][l] = num++;
    l++;
  }
  return ans;
};
// @lc code=end

/**
* @param {number} n
* @return {number[][]}
*/
var generateMatrix = function (n) {
  const res = Array.from({ length: n }, () => []);
  let i = 0, j = 0, di = 0, dj = 1;
  for (let k = 1, last = n * n; k <= last; k++) {
    res[i][j] = k;
    if (res[(i + di + n) % n][(j + dj + n) % n])
      [di, dj] = [dj, -di]
    i += di
    j += dj
  }
  return res
};
