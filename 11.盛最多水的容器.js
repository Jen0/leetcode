/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * 方法三：代码优化
 * 解题思路 同方法二
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let i = 0, j = height.length - 1, maxVal = 0, preHeight = 0;
  while (i !== j) {
    maxVal = Math.max(maxVal,
      (preHeight = Math.min(height[i], height[j])) * (j - i)
    )
    while (height[i] <= preHeight && i < j) i++;
    while (height[j] <= preHeight && i < j) j--;
  }
  return maxVal;
};
// @lc code=end


/**
 * 方法二： 过滤其中不必要的计算
 * 使用双指针，移动方法：
 * 1. 比较左右高度，低的一侧，向内侧移动，一直到双指针相遇
 * 2. 向内测移动，排除高度比上一次低的
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let i = 0, j = height.length - 1, maxVal = 0, preHeight = 0;
  while (i !== j) {
    if (height[i] <= height[j]) {
      if (preHeight < height[i]) {
        maxVal = Math.max(maxVal, height[i] * (j - i))
        preHeight = height[i];
      }
      i++;
    } else {
      if (preHeight < height[j]) {
        maxVal = Math.max(maxVal, height[j] * (j - i))
        preHeight = height[j];
      }
      j--;
    }

  }
  return maxVal;
};

/**
 * 方法一：使用双指针，移动方法：比较左右高度，低的一侧，向内侧移动，一直到双指针相遇
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let i = 0, j = height.length - 1, maxVal = 0;
  while (i !== j) {
    maxVal = Math.max(
      maxVal,
      Math.min(height[i], height[j]) * (j - i)
    );
    height[i] <= height[j] ? i++ : j--;
  }
  return maxVal;
};