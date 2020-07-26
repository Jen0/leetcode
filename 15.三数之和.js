/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (28.08%)
 * Likes:    2290
 * Dislikes: 0
 * Total Accepted:    255.8K
 * Total Submissions: 910.6K
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0
 * ？请你找出所有满足条件且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 
 * 
 * 示例：
 * 
 * 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 * 
 * 满足要求的三元组集合为：
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * 解题思路，使用双指针
 * 1. 将原数组从小到大排序
 * 2. 遍历数组, k 从下标0 直到 length - 2
 *    双指针(i, j)分别取 k + 1 , length - 1
 * 3. 这时的三数之和
 *    如果小于 0, i 就向右移动一位，如果后一位跟当前数值一样大，就继续向右移动一位
 *    如果大于 0, j 就向左移动一位，如果前一位跟当前数值一样大，就继续想左移动一位
 *    如果等于0，就往返回数组中添加这三位数。
 *    
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {

  nums.sort((a, b) => a - b);

  let res = [], sum = 0, lastIndex = nums.length - 1;

  for (let k = 0; k < lastIndex - 1; k++) {
    if (nums[k] > 0) break;
    if (k > 0 && nums[k] === nums[k - 1]) continue;

    let i = k + 1, j = lastIndex;
    while (i < j) {
      sum = nums[i] + nums[j] + nums[k];
      if (sum < 0) {
        while (i < j && nums[i] === nums[++i]);
      } else if (sum > 0) {
        while (i < j && nums[j] === nums[--j]);
      } else {
        res.push([nums[k], nums[i], nums[j]]);
        while (i < j && nums[i] === nums[++i]);
        while (i < j && nums[j] === nums[--j]);
      }
    }
  }
  return res;
};
// @lc code=end

