/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 *
 * https://leetcode-cn.com/problems/word-ladder/description/
 *
 * algorithms
 * Medium (42.47%)
 * Likes:    380
 * Dislikes: 0
 * Total Accepted:    50K
 * Total Submissions: 116.6K
 * Testcase Example:  '"hit"\n"cog"\n["hot","dot","dog","lot","log","cog"]'
 *
 * 给定两个单词（beginWord 和 endWord）和一个字典，找到从 beginWord 到 endWord
 * 的最短转换序列的长度。转换需遵循如下规则：
 * 
 * 
 * 每次转换只能改变一个字母。
 * 转换过程中的中间单词必须是字典中的单词。
 * 
 * 
 * 说明:
 * 
 * 
 * 如果不存在这样的转换序列，返回 0。
 * 所有单词具有相同的长度。
 * 所有单词只由小写字母组成。
 * 字典中不存在重复的单词。
 * 你可以假设 beginWord 和 endWord 是非空的，且二者不相同。
 * 
 * 
 * 示例 1:
 * 
 * 输入:
 * beginWord = "hit",
 * endWord = "cog",
 * wordList = ["hot","dot","dog","lot","log","cog"]
 * 
 * 输出: 5
 * 
 * 解释: 一个最短转换序列是 "hit" -> "hot" -> "dot" -> "dog" -> "cog",
 * ⁠    返回它的长度 5。
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 * beginWord = "hit"
 * endWord = "cog"
 * wordList = ["hot","dot","dog","lot","log"]
 * 
 * 输出: 0
 * 
 * 解释: endWord "cog" 不在字典中，所以无法进行转换。
 * 
 */

// @lc code=start
/**
 * 
 * 广度优先遍历  双向  96ms beats 95.63%
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;
  const visited = new Set();

  let beginVisited = new Set([beginWord]);
  let endVisited = new Set([endWord]);

  let step = 1, size = beginWord.length;

  while (beginVisited.size && endVisited.size) {

    // 优先选择小的哈希表进行扩散，考虑到的情况更少
    if (beginVisited.size > endVisited.size) {
      [beginVisited, endVisited] = [endVisited, beginVisited];
    }

    const nextLevelVisited = new Set();
    let iterator = beginVisited.values(), word;
    while (word = iterator.next().value) {
      for (let j = 0; j < size; j++) {
        for (let k = 0; k < 26; k++) {
          let char = String.fromCharCode(97 + k);
          if (word[j] === char) continue;

          let nextWord = word.substring(0, j)
            + char + word.substring(j + 1);

          if (wordSet.has(nextWord)) {
            if (endVisited.has(nextWord)) return step + 1;

            if (!visited.has(nextWord)) {
              visited.add(nextWord);
              nextLevelVisited.add(nextWord);
            }
          }
        }
      }
    }
    beginVisited = nextLevelVisited;
    step++;
  }
  return 0;
};
// @lc code=end



/**
 * 
 * 广度优先遍历 单向
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.size || !wordSet.has(endWord)) return 0;

  wordSet.delete(beginWord);

  const queue = [beginWord];

  const visited = new Set([beginWord]);

  let step = 1, size = beginWord.length,
    word26 = 'abcdefghijklmnopqrstuvwxyz';

  while (queue.length) {

    for (let len = queue.length, i = len - 1; i >= 0; i--) {
      let word = queue.shift();

      for (let j = 0; j < size; j++) {
        for (let k = 0; k < 26; k++) {
          if (word[j] === word26[k]) continue;

          let nextWord = word.substring(0, j)
            + word26[k] + word.substring(j + 1);

          if (wordSet.has(nextWord)) {
            if (nextWord === endWord) return step + 1;

            if (!visited.has(nextWord)) {
              visited.add(nextWord);
              queue.push(nextWord);
            }
          }
        }
      }
    }
    step++;
  }
  return 0;
};