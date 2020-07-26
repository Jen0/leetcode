/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 *
 * https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/description/
 *
 * algorithms
 * Easy (48.67%)
 * Likes:    293
 * Dislikes: 0
 * Total Accepted:    93.2K
 * Total Submissions: 190.6K
 * Testcase Example:  '[1,2,2,1]\n[2,2]'
 *
 * 给定两个数组，编写一个函数来计算它们的交集。
 * 
 * 示例 1:
 * 
 * 输入: nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出: [2,2]
 * 
 * 
 * 示例 2:
 * 
 * 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出: [4,9]
 * 
 * 说明：
 * 
 * 
 * 输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。
 * 我们可以不考虑输出结果的顺序。
 * 
 * 
 * 进阶:
 * 
 * 
 * 如果给定的数组已经排好序呢？你将如何优化你的算法？
 * 如果 nums1 的大小比 nums2 小很多，哪种方法更优？
 * 如果 nums2 的元素存储在磁盘上，磁盘内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？
 * 
 * 
 */

// @lc code=start
/**
 * 方法三 JS API˛
 * 时间复杂度O(n^2)
 * 空间复杂度O(n)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let res = [], j = 0;
  for (let i = 0; i < nums1.length; i++)
    if ((j = nums2.indexOf(nums1[i])) !== -1) {
      res.push(nums1[i])
      nums2[j] = undefined;
    }
  return res;
};
// @lc code=end

/**
 * 方法二 排序+双指针
 * 时间复杂度O(nlogn)
 * 空间复杂度O(1)
 * 1. 首先排序两个数组
 * 2. 使用双指针比较两数组的元素，
 *    哪个小，就移动哪个数组的下标，
 *    如果有两个值，相等，就记录下来。
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  if (!nums1.length || !nums2.length) return [];
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let i = 0; j = 0; n = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) ++i;
    else if (nums1[i] > nums2[j]) ++j;
    else {
      nums2[n++] = nums2[j++];
      ++i;
    }
  }
  nums2.length = n;
  return nums2;
};

/**
 * 方法一 map实现
 * 时间复杂度O(n)
 * 空间复杂度O(n)
 * 1. 首先用map记录nums1的数字及其出现的个数，
 * 2. 在nums2中查找，如果在map存在，就将map中的这个数的个数 -1；
 *    同时将这个数赋值在 nums2 的第一个元素；
 *    以此类推。
 * 3. 截取赋值 nums2 次数的长度。
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let map = {}, n = 0;
  for (let i = 0; i < nums1.length; i++) {
    const e = nums1[i];
    if (!map[e]) map[e] = 0;
    if (map[e] !== undefined) map[e]++;
  }
  for (let j = 0; j < nums2.length; j++)
    if (map[nums2[j]]) {
      nums2[n++] = nums2[j];
      map[nums2[j]]--;
    }
  nums2.length = n;
  return nums2;
};