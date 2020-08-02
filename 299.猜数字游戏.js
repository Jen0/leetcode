/*
 * @lc app=leetcode.cn id=299 lang=javascript
 *
 * [299] 猜数字游戏
 *
 * https://leetcode-cn.com/problems/bulls-and-cows/description/
 *
 * algorithms
 * Easy (48.19%)
 * Likes:    77
 * Dislikes: 0
 * Total Accepted:    14.9K
 * Total Submissions: 31K
 * Testcase Example:  '"1807"\n"7810"'
 *
 * 你在和朋友一起玩 猜数字（Bulls and Cows）游戏，该游戏规则如下：
 * 
 * 
 * 你写出一个秘密数字，并请朋友猜这个数字是多少。
 * 朋友每猜测一次，你就会给他一个提示，告诉他的猜测数字中有多少位属于数字和确切位置都猜对了（称为“Bulls”,
 * 公牛），有多少位属于数字猜对了但是位置不对（称为“Cows”, 奶牛）。
 * 朋友根据提示继续猜，直到猜出秘密数字。
 * 
 * 
 * 请写出一个根据秘密数字和朋友的猜测数返回提示的函数，返回字符串的格式为 xAyB ，x 和 y 都是数字，A 表示公牛，用 B 表示奶牛。
 * 
 * 
 * xA 表示有 x 位数字出现在秘密数字中，且位置都与秘密数字一致。
 * yB 表示有 y 位数字出现在秘密数字中，但位置与秘密数字不一致。
 * 
 * 
 * 请注意秘密数字和朋友的猜测数都可能含有重复数字，每位数字只能统计一次。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: secret = "1807", guess = "7810"
 * 输出: "1A3B"
 * 解释: 1 公牛和 3 奶牛。公牛是 8，奶牛是 0, 1 和 7。
 * 
 * 示例 2:
 * 
 * 输入: secret = "1123", guess = "0111"
 * 输出: "1A1B"
 * 解释: 朋友猜测数中的第一个 1 是公牛，第二个或第三个 1 可被视为奶牛。
 * 
 * 
 * 
 * 说明: 你可以假设秘密数字和朋友的猜测数都只包含数字，并且它们的长度永远相等。
 * 
 */

// @lc code=start

/**
 * 方法三 数组 一次遍历
 * 时间复杂度O(n) 68 ms
 * 空间复杂度O(n)
 * 方法二优化方法
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  let a = 0, b = 0, map = new Array(10).fill(0);
  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) a++;
    else {
      if (map[secret[i]]++ < 0) b++;
      if (map[guess[i]]-- > 0) b++;
    }
  }
  return a + 'A' + b + 'B';
};

// @lc code=end

/**
 * 方法二 映射表 一次遍历
 * 时间复杂度O(n) 72 ms
 * 空间复杂度O(n)
 * A 计数方法
 * 如果两字符串中的所在下标对应两字符相同，A 就 + 1
 * 
 * B 计数方法
 * 增加映射表(key-> 字符， value -> 0)，记录每个字符对应的值，初始化为0
 * 1. e.g. 
 * 如果secret中的字符 8 首次出现一次，映射表更新 map[8] = 1；
 * 之后如果guess中的字符 8 也出现了，判断 map[8] < 0, B计数 +1，
 * 同时映射表更新map[8] = 0； 
 * 
 * 2. e.g.
 * 如果guess中的字符 8 首次出现一次，映射表更新 map[8] = -1；
 * 之后如果secret中的字符 8 也出现了，判断 map[8] > 0, B计数 +1，
 * 同时映射表更新map[8] = 0；
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  if (!secret.length && !guess.length) return '0A0B';
  let a = 0, b = 0, map = {};
  for (let i = 0; i < secret.length; i++) {
    let charA = secret.charAt(i), charB = guess.charAt(i);
    if (charA === charB) a++;
    else {
      map[charA] === undefined && (map[charA] = 0)
      if (map[charA]++ < 0) b++;
      map[charB] === undefined && (map[charB] = 0)
      if (map[charB]-- > 0) b++;
    }
  }
  return a + 'A' + b + 'B';
};


/**
 * 方法一 暴力
 * 将数字字符串转成数字数组
 * A: 如果相同下标的数字相等，就计数+1
 * B: 如果两数组都存在同一数字，就计数+1
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  if (!secret.length && !guess.length) return '0A0B';
  let arr1 = convertNumbers(secret),
    arr2 = convertNumbers(guess),
    aMap = new Map(), bMap = new Map();
  // 统计A
  for (let i = 0; i < arr1.length; i++)
    if (arr1[i] === arr2[i])
      aMap.set(i, arr1[i]);
  // 统计B
  out: for (let i = 0; i < arr1.length; i++) {
    if (aMap.get(i) !== undefined) continue
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] && i !== j
        && aMap.get(j) !== arr1[i]
        && bMap.get(j) === undefined
      ) {
        bMap.set(j, arr2[j]);
        continue out;
      }
    }
  }
  return `${aMap.size}A${bMap.size}B`
};

function convertNumbers (str) {
  return str.split('').map(o => Number(o));
}


