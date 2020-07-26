/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
 *
 * https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/
 *
 * algorithms
 * Medium (68.66%)
 * Likes:    235
 * Dislikes: 0
 * Total Accepted:    41.8K
 * Total Submissions: 60.7K
 * Testcase Example:  '[9,3,15,20,7]\n[9,15,7,20,3]'
 *
 * 根据一棵树的中序遍历与后序遍历构造二叉树。
 * 
 * 注意:
 * 你可以假设树中没有重复的元素。
 * 
 * 例如，给出
 * 
 * 中序遍历 inorder = [9,3,15,20,7]
 * 后序遍历 postorder = [9,15,7,20,3]
 * 
 * 返回如下的二叉树：
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 解题思路同 (105题-前序与中序构造)
 * 
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  let inLen = inorder.length, postLen = postorder.length;
  if (inLen !== postLen) return null;

  const map = new Map();
  for (let i = 0; i < inLen; i++)
    map.set(inorder[i], i);

  function recursion (postorder, postLeft, postRight, map, inLeft, inRight) {
    if (postLeft > postRight || inLeft > inRight) return null;

    // 后序遍历序列从最后开始
    let rootVal = postorder[postRight];
    let rootNode = new TreeNode(rootVal);
    // 节点索引
    let pIndex = map.get(rootVal);

    rootNode.left = recursion(postorder, postLeft, pIndex - 1 - inLeft + postLeft, map, inLeft, pIndex - 1);

    rootNode.right = recursion(postorder, pIndex - 1 - inLeft + postLeft + 1, postRight - 1, map, pIndex + 1, inRight);

    return rootNode;
  }

  return recursion(postorder, 0, postLen - 1, map, 0, inLen - 1);
};
// @lc code=end

