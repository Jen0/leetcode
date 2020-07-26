/*
 * @lc app=leetcode.cn id=410 lang=javascript
 *
 * [410] 分割数组的最大值
 *
 * https://leetcode-cn.com/problems/split-array-largest-sum/description/
 *
 * algorithms
 * Hard (43.37%)
 * Likes:    261
 * Dislikes: 0
 * Total Accepted:    16.8K
 * Total Submissions: 33.3K
 * Testcase Example:  '[7,2,5,10,8]\n2'
 *
 * 给定一个非负整数数组和一个整数 m，你需要将这个数组分成 m 个非空的连续子数组。设计一个算法使得这 m 个子数组各自和的最大值最小。
 * 
 * 注意:
 * 数组长度 n 满足以下条件:
 * 
 * 
 * 1 ≤ n ≤ 1000
 * 1 ≤ m ≤ min(50, n)
 * 
 * 
 * 示例: 
 * 
 * 
 * 输入:
 * nums = [7,2,5,10,8]
 * m = 2
 * 
 * 输出:
 * 18
 * 
 * 解释:
 * 一共有四种方法将nums分割为2个子数组。
 * 其中最好的方式是将其分为[7,2,5] 和 [10,8]，
 * 因为此时这两个子数组各自的和的最大值为18，在所有情况中最小。
 * 
 * 
 */

// @lc code=start
/**
 * 
 * 二分法 
 * 1. 区间范围: [ max(nums), sum(nums) ]
 * 2. 移动规则:
 *    2.1 分割子数组数量 > m , left  -> mid + 1
 *    2.2 分割子数组数量 <= m, right -> mid;
 * 
 * 3. 分割子数组数量如何求
 *    3.1 初始化为 1，即至少分割一个元素。
 *    3.2 遍历nums, 元素累计和 > mid , 数量就加1，
 *    3.3 并且在当前下标复位，重新累计
 * 
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function (nums, m) {
  let len = nums.length, max = nums[0], sum = 0;

  for (let i = 0; i < len; i++) {
    sum += nums[i];
    max = nums[i] > max ? nums[i] : max;
  }
  // while (left < right)
  while (max < sum) {
    let mid = (max + sum) >>> 1;

    let temp = 0;
    let cnt = 1; // 分割子数组数量
    for (let i = 0; i < len; i++) {
      temp += nums[i];
      if (temp > mid) {
        temp = nums[i];
        cnt++;
      }
    }

    if (cnt > m) {
      max = mid + 1;
    } else {
      sum = mid;
    }
  }
  return max;
};
// @lc code=end

