/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N叉树的层序遍历
 *
 * https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (65.53%)
 * Likes:    95
 * Dislikes: 0
 * Total Accepted:    23.5K
 * Total Submissions: 35.7K
 * Testcase Example:  '[1,null,3,2,4,null,5,6]'
 *
 * 给定一个 N 叉树，返回其节点值的层序遍历。 (即从左到右，逐层遍历)。
 * 
 * 例如，给定一个 3叉树 :
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 返回其层序遍历:
 * 
 * [
 * ⁠    [1],
 * ⁠    [3,2,4],
 * ⁠    [5,6]
 * ]
 * 
 * 
 * 
 * 
 * 说明:
 * 
 * 
 * 树的深度不会超过 1000。
 * 树的节点总数不会超过 5000。
 * 
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * 方法三 72ms beats 100%
 * 方法二改造版
 * 
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  const res = [];
  let array = [root], nextLevelData, currentLevelData;
  while (array.length) {
    currentLevelData = [], nextLevelData = [];
    for (let i = 0, len = array.length; i < len; i++) {
      currentLevelData.push(array[i].val);
      nextLevelData.push(...array[i].children);
    }
    array = nextLevelData;
    res.push(currentLevelData);
  }
  return res;
};
// @lc code=end

/**
 * 方法二 队列实现广度优先搜索
 * 
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  const res = [], queue = [root];
  let current, levelData, children;
  while (queue.length) {
    levelData = [];
    // 清空当前层的queue
    for (let i = 0, len = queue.length; i < len; i++) {
      current = queue.shift();
      levelData.push(current.val);
      (children = current.children) && queue.push(...children)
    }
    res.push(levelData);
  }
  return res;
};

/**
 * 方法一 递归
 * 因为这里是层序遍历，需要记录层级
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  const res = [];
  let level = 0;

  function recursion (node, level) {
    !res[level] && (res[level] = []);
    res[level].push(node.val);
    if (node.children)
      for (let i = 0; i < node.children.length; i++)
        recursion(node.children[i], level + 1);
  }

  recursion(root, level);

  return res;
};