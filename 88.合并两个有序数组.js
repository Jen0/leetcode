/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 *
 * https://leetcode-cn.com/problems/merge-sorted-array/description/
 *
 * algorithms
 * Easy (47.93%)
 * Likes:    540
 * Dislikes: 0
 * Total Accepted:    165.4K
 * Total Submissions: 344.6K
 * Testcase Example:  '[1,2,3,0,0,0]\n3\n[2,5,6]\n3'
 *
 * 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
 * 
 * 
 * 
 * 说明:
 * 
 * 
 * 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
 * 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 * 
 * 
 * 
 * 
 * 示例:
 * 
 * 输入:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 * 
 * 输出: [1,2,2,3,5,6]
 * 
 */

// @lc code=start
/**
 * 方法二 的 代码优化
 * 56ms and beats 99.23%
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let r = m + n - 1;
  m--;
  n--;
  while (n >= 0)
    if (m >= 0)
      nums1[r--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
    else
      nums1[r--] = nums2[n--];
};
// @lc code=end

/**
 * 方法二 双指针，从后向前
 * 时间复杂度O(n)
 * 空间复杂度O(1)
 * 迭代
 * 1. 从两数组的最后一个元素开始比较，哪个大就插入到nums1的末尾，同时大的那个数组遍历下标 -1；
 * 2. 直到两数组中一个遍历结束。
 * 3. 当数组nums1 遍历结束后，nums2 还没有遍历结束。
 *    将nums2剩余遍历的元素，依次插入nums1对应的下标
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let r = m + n - 1;
  m--;
  n--;
  while (m >= 0 && n >= 0)
    nums1[r--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
  while (n >= 0)
    nums1[r--] = nums2[n--];
};

/**
 * 方法一 暴力——合并后排序
 * 时间复杂度O(nlogn)
 * 空间复杂度O(1)
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  nums1.length = m;
  Array.prototype.push.apply(nums1, nums2);
  nums1.sort((a, b) => a - b);
};