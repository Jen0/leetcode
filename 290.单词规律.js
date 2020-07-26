/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 *
 * https://leetcode-cn.com/problems/word-pattern/description/
 *
 * algorithms
 * Easy (42.82%)
 * Likes:    162
 * Dislikes: 0
 * Total Accepted:    25.9K
 * Total Submissions: 60.5K
 * Testcase Example:  '"abba"\n"dog cat cat dog"'
 *
 * 给定一种规律 pattern 和一个字符串 str ，判断 str 是否遵循相同的规律。
 * 
 * 这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。
 * 
 * 示例1:
 * 
 * 输入: pattern = "abba", str = "dog cat cat dog"
 * 输出: true
 * 
 * 示例 2:
 * 
 * 输入:pattern = "abba", str = "dog cat cat fish"
 * 输出: false
 * 
 * 示例 3:
 * 
 * 输入: pattern = "aaaa", str = "dog cat cat dog"
 * 输出: false
 * 
 * 示例 4:
 * 
 * 输入: pattern = "abba", str = "dog dog dog dog"
 * 输出: false
 * 
 * 说明:
 * 你可以假设 pattern 只包含小写字母， str 包含了由单个空格分隔的小写字母。    
 * 
 */

// @lc code=start
/**
 * 方法三
 * 方法二优化
 * 时间复杂度O(n) 56ms
 * 空间复杂度O(n)
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
  const words = str.split(' ');
  if (pattern.length !== words.length) return false;
  const map = new Map(), PREFIX = '_';
  for (let i = 0; i < pattern.length; i++) {
    let char = PREFIX + pattern[i], word = words[i];
    if (!map.has(char) && !map.has(word)) {
      map.set(char, word);
      map.set(word, char);
    } else if (map.get(char) !== word)
      return false;
  }
  return true;
};

// @lc code=end


/**
 * 方法二 两映射表
 * 时间复杂度O(n) 60ms
 * 空间复杂度O(n)
 * 分割字符串str，得到，arr
 * 1. 如果pattern的长度 !== arr的长度，直接返回false
 * 2. 双映射表相互记录，key - value
 * 2.1 如果映射表存在的key，对应的value 不一致，就返回false
 * 2.2 如果镜像映射表存在的key，对应的value 不一致，就返回false
 * 2.3 如果两映射表的长度不一致，返回false
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
  const words = str.split(' ');
  if (pattern.length !== words.length) return false;
  const map = new Map(), mirrorMap = new Map();
  for (let i = 0; i < pattern.length; i++) {
    let char = pattern[i], word = words[i];
    if (map.has(word) && map.get(word) !== char)
      return false;
    if (mirrorMap.has(char) && mirrorMap.get(char) !== word)
      return false;
    map.set(word, char);
    mirrorMap.set(char, word);
  }
  return true;
};

/**
 * 方法一 使用indexOf
 * 时间复杂度O(n) 64ms
 * 空间复杂度O(n)
 * 分割字符串str，得到，arr
 * 比对 pattern 字符对应的下标，是否等于 arr 字符对应的下边
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
  const arr = str.split(' ');
  if (pattern.length !== arr.length) return false;
  for (let i = 0; i < pattern.length; i++)
    if (pattern.indexOf(pattern[i]) !== arr.indexOf(arr[i]))
      return false;
  return true;
};