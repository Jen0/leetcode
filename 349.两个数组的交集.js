/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 *
 * https://leetcode-cn.com/problems/intersection-of-two-arrays/description/
 *
 * algorithms
 * Easy (69.48%)
 * Likes:    198
 * Dislikes: 0
 * Total Accepted:    76.8K
 * Total Submissions: 110.2K
 * Testcase Example:  '[1,2,2,1]\n[2,2]'
 *
 * 给定两个数组，编写一个函数来计算它们的交集。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出：[2]
 * 
 * 
 * 示例 2：
 * 
 * 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出：[9,4]
 * 
 * 
 * 
 * 说明：
 * 
 * 
 * 输出结果中的每个元素一定是唯一的。
 * 我们可以不考虑输出结果的顺序。
 * 
 * 
 */

// @lc code=start
/**
 * 方法一 使用 内置API
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  if (!nums1.length || !nums2.length) return [];
  return [...new Set(nums1)].filter(n => ~nums2.indexOf(n));
};
// @lc code=end


/**
 * 方法二 使用 双指针
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  if (!nums1.length || !nums2.length) return [];
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let i = 0, j = 0, k = 0, n1 = nums1.length, n2 = nums2.length;
  while (i < n1 && j < n2) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else {
      nums1[k++] = nums1[i++];
      j++;
    }
  }
  nums1.length = k;
  return [...new Set(nums1)];
};


