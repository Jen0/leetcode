/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 *
 * https://leetcode-cn.com/problems/group-anagrams/description/
 *
 * algorithms
 * Medium (61.95%)
 * Likes:    383
 * Dislikes: 0
 * Total Accepted:    84.1K
 * Total Submissions: 135.1K
 * Testcase Example:  '["eat","tea","tan","ate","nat","bat"]'
 *
 * 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
 * 
 * 示例:
 * 
 * 输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
 * 输出:
 * [
 * ⁠ ["ate","eat","tea"],
 * ⁠ ["nat","tan"],
 * ⁠ ["bat"]
 * ]
 * 
 * 说明：
 * 
 * 
 * 所有输入均为小写字母。
 * 不考虑答案输出的顺序。
 * 
 * 
 */

// @lc code=start
/**
 * 方法二 映射表 
 * key -> 每个字母对应的质数乘积
 * 26位质数元数组，两两乘积都不一样。
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map(),
    prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103];
  for (let i = 0; i < strs.length; i++) {
    let str = strs[i],
      key = 1;
    for (let j = 0; j < str.length; j++) {
      key *= prime[str.charCodeAt(j) - 97];
    }
    if (map.get(key)) map.get(key).push(str);
    else map.set(key, [str]);
  }
  return [...map.values()];
};
// @lc code=end



/**
 * 方法一 映射表 
 * key -> 字母计数 + #
 * 例如： 
 * "abb" 就映射到了 "1#2#0#0#0"。
 * "cdc" 就映射到了 "0#0#2#1#0"。
 * "dcc" 就映射到了 "0#0#2#1#0"。
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {

  const map = new Map();
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];

    const arr = new Array(26).fill(0);
    for (let j = 0; j < str.length; j++) {
      arr[str.charCodeAt(j) - 97]++;
    }

    let key = '';
    for (let k = 0; k < arr.length; k++) {
      key += arr[k] + '#';
    }

    if (map.get(key)) {
      map.get(key).push(str);
    } else {
      map.set(key, [str]);
    }
  }

  return [...map.values()];
};

/**
 * 使用对象
 */
var groupAnagrams = function (strs) {

  const map = {};
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];

    const arr = new Array(26).fill(0);
    for (let j = 0; j < str.length; j++) {
      arr[str.charCodeAt(j) - 97]++;
    }

    let key = '';
    for (let k = 0; k < arr.length; k++) {
      key += arr[k] + '#';
    }

    if (map[key]) {
      map[key].push(str);
    } else {
      map[key] = [str];
    }
  }
  return Object.keys(map).map(key => map[key]);
};