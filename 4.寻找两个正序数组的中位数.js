/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const arr = [...nums1, ...nums2].sort((a, b) => a - b);
    const length = arr.length;
    return length % 2 === 0 ? (arr[length / 2 - 1] + arr[(length) / 2]) / 2 : arr[(length - 1) / 2];
};
// @lc code=end

