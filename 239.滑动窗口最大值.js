/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 *
 * https://leetcode-cn.com/problems/sliding-window-maximum/description/
 *
 * algorithms
 * Hard (47.92%)
 * Likes:    432
 * Dislikes: 0
 * Total Accepted:    58K
 * Total Submissions: 120.6K
 * Testcase Example:  '[1,3,-1,-3,5,3,6,7]\n3'
 *
 * 给定一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k
 * 个数字。滑动窗口每次只向右移动一位。
 * 
 * 返回滑动窗口中的最大值。
 * 
 * 
 * 
 * 进阶：
 * 
 * 你能在线性时间复杂度内解决此题吗？
 * 
 * 
 * 
 * 示例:
 * 
 * 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
 * 输出: [3,3,5,5,6,7] 
 * 解释: 
 * 
 * ⁠ 滑动窗口的位置                最大值
 * ---------------               -----
 * [1  3  -1] -3  5  3  6  7       3
 * ⁠1 [3  -1  -3] 5  3  6  7       3
 * ⁠1  3 [-1  -3  5] 3  6  7       5
 * ⁠1  3  -1 [-3  5  3] 6  7       5
 * ⁠1  3  -1  -3 [5  3  6] 7       6
 * ⁠1  3  -1  -3  5 [3  6  7]      7
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 10^5
 * -10^4 <= nums[i] <= 10^4
 * 1 <= k <= nums.length
 * 
 * 
 */

// @lc code=start

/**
 * 方法三 双端队列  108ms beats 90.29%
 * 例子 nums = [1,3,-1,-3,5,3,6,7], 和 k = 3, n = nums.length = 8
 * 维护一个双端队列 window，
 * 1. 从例子中看，如果window中没有元素就直接添加
 * 2. 如果window中y有元素，比当前元素小，就取出这个元素
 * 3. 如果window第一个元素，大于了 k - 1,就取出第一个元素
 *    始终保存window中第一个元素是最大的下标。
 * 4. 如果 i 到达了 k - 1 下标元素，就把window中第一个元素返回。
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let window = [];
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (i - window[0] > k - 1) {
      window.shift();
    }
    for (let j = window.length - 1; j >= 0; j--) {
      if (nums[window[j]] < nums[i]) {
        window.pop();
      }
    }
    window.push(i);
    if (i >= k - 1) {
      res.push(nums[window[0]]);
    }
  }
  return res;
};

// @lc code=end




/**
 * 方法二 动态规划 140ms beats 53%
 * 例子 nums = [1,3,-1,-3,5,3,6,7], 和 k = 3, n = nums.length = 8
 * 形式上，将nums数组分组，形成每 k(3)个元素一组的块，
 * 得到 3个块，最后一块只有两个元素.
 * 1. 建立两个数组,
 * left:  每个块区域内的第一个元素跟对应原数组下标元素相同，其他元素是 `从左到右` 两两比较大小，保存较大的元素，
 * right: 每个块区域内的第一个元素跟对应原数组下标元素相同，其他元素是`从右到左`两两比较大小，保存较大的元素。
 * 2. 最后比较left 和 right 指定下标的较大元素返回。
 * 比较下标: max(right[i], left[i + k -1])
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let n = nums.length;
  // if (n < 2 || !k) return nums;
  let left = [], right = [], ans = [], j;
  left[0] = nums[0];
  right[n - 1] = nums[n - 1];

  for (let i = 1; i < n; i++) {
    if (i % k === 0) left[i] = nums[i];
    else left[i] = Math.max(left[i - 1], nums[i]);

    j = n - i - 1;
    if ((j + 1) % k === 0) right[j] = nums[j];
    else right[j] = Math.max(right[j + 1], nums[j]);
  }

  for (let i = 0; i < n - k + 1; i++) {
    ans.push(Math.max(right[i], left[i + k - 1]));
  }
  return ans;
};




/**
 * 方法一 暴力 不推荐 效率很差 3500ms
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let n = nums.length;
  if (!n || !k) return [];

  let output = new Array(n - k + 1);
  for (let i = 0; i < n - k + 1; i++) {
    let max = Number.MIN_SAFE_INTEGER;
    for (let j = i; j < i + k; j++)
      max = Math.max(max, nums[j]);
    output[i] = max;
  }
  return output;
};

/**
 * 方法一 暴力 不推荐 效率很差 7000ms
 * 维护一个k长度的数组，每次剔除第一个元素，和添加一个元素。
 * 取出最大的数，放进放回的数组中去。
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (nums.length < k) return nums;
  const temp = nums.slice(0, k), res = [Math.max(...temp)];

  for (let i = 1; i < nums.length - k + 1; i++) {
    temp.shift();
    temp.push(nums[i + k - 1])
    res.push(Math.max(...temp));
  }
  return res;
};

