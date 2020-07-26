/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 *
 * https://leetcode-cn.com/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (51.28%)
 * Likes:    1396
 * Dislikes: 0
 * Total Accepted:    114.6K
 * Total Submissions: 222.6K
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * 
 * 
 * 
 * 上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 感谢
 * Marcos 贡献此图。
 * 
 * 示例:
 * 
 * 输入: [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出: 6
 * 
 */

// @lc code=start
/**
 * 
 * 方法三 栈
 * 
 * 1. 从0开始遍历数组
 * 2. 当栈为空，就入栈，
 * 3. 接着遍历栈，如果 当前柱子高度，比 栈顶元素 高，
 * 3.1 就取出栈顶元素，
 * 3.2 栈如果为空，就退出   
 * 3.3 栈不为空，就计算
 * 3.4 横向长度 = 当前柱子的索引 - 栈顶元素 - 1
 * 3.5 纵向高度 = 当前柱子的高度和栈顶元素高度的最小值 - 上个栈顶元素的高度
 * 3.6 累计雨水值 += 横向长度 * 纵向高度
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (height.length < 3) return 0;
  let res = 0, i = 0, stack = [];
  while (i < height.length) {
    while (stack.length && height[i] > height[stack[stack.length - 1]]) {
      let top = stack.pop();
      if (!stack.length) break;
      let topTwo = stack[stack.length - 1], distance = i - topTwo - 1,
        diffH = Math.min(height[i], height[topTwo]) - height[top];
      res += distance * diffH;
    }
    stack.push(i++);
  }
  return res;
};
// @lc code=end

/**
 * 
 * 方法五 双指针
 * 主动反馈优化
 * 
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (height.length < 3) return 0;
  let l = 0, r = height.length - 1, level = 0, water = 0;
  while (l < r) {
    let lower = height[height[l] < height[r] ? l++ : r--];
    level = Math.max(level, lower);
    water += level - lower;
  }
  return water;
};

/**
 * 
 * 方法四 双指针
 * 主动反馈优化
 * 
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (height.length < 3) return 0;
  let res = 0, i = 0, j = height.length - 1;

  while (i < j && height[i] <= height[i + 1]) i++;
  while (i < j && height[j] <= height[j - 1]) j--;

  while (i < j) {
    let lh = height[i], rh = height[j];
    if (lh <= rh) {
      while (i < j && lh >= height[++i]) res += lh - height[i];
    } else {
      while (i < j && rh >= height[--j]) res += rh - height[j];
    }
  }
  return res;
};

/**
 * 
 * 方法三 双指针 64ms and beats 97.69%;
 * 1. 双指针夹逼遍历数组
 * 2. 比较左右两指针的柱子高度
 * 2.1 如果左侧柱子低，
 * 2.2 这时再比较，
 *      如果左侧柱子 比 左侧最大柱子高度(leftMax) 大，就更新左侧最大高度，
 *      如果左侧柱子 比 左侧最大柱子高度(leftMax) 小，
 *      就积累雨水值 = 左侧最大值 - 当前柱子的高度，
 * 2.3 左侧下标+1，往内进一步
 * 3. 右侧同理，直到左右指针相遇
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let res = 0, lMax = 0, rMax = 0;
  for (let i = 0, j = height.length - 1; i < j;) {
    let lh = height[i], rh = height[j];
    if (lh <= rh) {
      lh >= lMax ? lMax = lh : res += (lMax - lh);
      i++;
    } else {
      rh >= rMax ? rMax = rh : res += (rMax - rh);
      j--;
    }
  }
  return res;
};

/**
 * 
 * 方法一 暴力
 * 1. 从下标 1 遍历数组
 * 2. 从左右两侧，分别找出，最高的两个柱子，
 *    在其中取低的那个柱子 - 当前下标的柱子的高度，
 *    得出 当前下边积累的雨水值。
 * 3. 以此类推，求出每列的积累雨水值。   
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let res = 0;
  for (let i = 1, len = height.length; i < len; i++) {
    let leftMax = 0, rightMax = 0;
    for (let j = i; j >= 0; j--) {
      leftMax = Math.max(leftMax, height[j]);
    }
    for (let j = i; j < len; j++) {
      rightMax = Math.max(rightMax, height[j]);
    }
    res += Math.min(leftMax, rightMax) - height[i];
  }
  return res;
};