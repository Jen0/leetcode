/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 *
 * https://leetcode-cn.com/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (60.20%)
 * Likes:    206
 * Dislikes: 0
 * Total Accepted:    111.7K
 * Total Submissions: 185.1K
 * Testcase Example:  '"anagram"\n"nagaram"'
 *
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * 
 * 示例 1:
 * 
 * 输入: s = "anagram", t = "nagaram"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: s = "rat", t = "car"
 * 输出: false
 * 
 * 说明:
 * 你可以假设字符串只包含小写字母。
 * 
 * 进阶:
 * 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
 * 
 */

// @lc code=start
/**
 * 方法三 暴力 排序后比较 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  if (s === t) return true;
  return s.split('').sort().join('') == t.split('').sort().join('')
};
// @lc code=end

/**
 * 方法二 数组 72ms beats 96.81%
 * 记录s中的字母存在的次数
 * 如果t中的字母存在，次数就减一
 * 最终判断数组里的元素全部都是0
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  if (s === t) return true;
  const map = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    map[s.charCodeAt(i) - 97]++;
    map[t.charCodeAt(i) - 97]--;
  }
  return !map.some(item => item);
};
/**
 * 方法一 映射表
 * 记录s中的字母存在的次数
 * 迭代t中的字母，出现一次减一
 * 最终判断映射表是否为空
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (!map.get(c)) map.set(c, 1);
    map.set(c, map.get(c) + 1);
  }
  for (let j = 0; j < t.length; j++) {
    const c = t[j];
    if (!map.get(c)) return false;
    if (map.get(c)) {
      if (map.get(c) - 1 === 1) map.delete(c);
      else map.set(c, map.get(c) - 1);
    }
  }
  return map.size === 0;
};