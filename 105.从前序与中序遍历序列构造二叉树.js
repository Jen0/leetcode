/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 *
 * https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
 *
 * algorithms
 * Medium (67.16%)
 * Likes:    557
 * Dislikes: 0
 * Total Accepted:    93.2K
 * Total Submissions: 138.2K
 * Testcase Example:  '[3,9,20,15,7]\n[9,3,15,20,7]'
 *
 * 根据一棵树的前序遍历与中序遍历构造二叉树。
 * 
 * 注意:
 * 你可以假设树中没有重复的元素。
 * 
 * 例如，给出
 * 
 * 前序遍历 preorder = [3,9,20,15,7]
 * 中序遍历 inorder = [9,3,15,20,7]
 * 
 * 返回如下的二叉树：
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
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
 * 解题思路
 * 前序遍历     根 -> 左子树  -> 右子树
 * 下标及区间   1. 根:          preLeft
 *            2. 左子树左边界:  preLeft + 1
 *            3. 左子树右边界:  preIndex - inLeft + preLeft 
 *               (前序左子树的边界差 == 中序左子树的边界差) 
 *            4. 右子树左边界:  preIndex - inLeft + preLeft + 1
 *               (左子树右边界值 + 1)
 *            5. 右子树右边界:  preRight
 * 
 * 中序遍历     左子树 -> 根 -> 右子树
 * 下标及区间   1. 左子树左边界: inLeft
 *            2. 左子树右边界:  pIndex - 1
 *            3. 根:          pIndex
 *            4. 右子树左边界:  pIndex + 1
 *            5. 右子树右边界:  inRight
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  let preLen = preorder.length, inLen = inorder.length;
  if (preLen !== inLen) return null;

  const map = new Map();
  for (let i = 0, len = inorder.length; i < len; i++)
    map.set(inorder[i], i);

  /**
   * @param {Array} po        前序遍历序列 
   * @param {Number} preLeft  前序遍历序列子区间的左边界
   * @param {Number} preRight 前序遍历序列子区间的有边界
   * @param {Map} map         中序序列的hash表,key为nodeVal,value为序列的索引
   * @param {Number} inLeft   中序遍历序列子区间的左边界
   * @param {Number} inRight  中序遍历序列子区间的右边界
   */
  function recursion (po, preLeft, preRight, map, inLeft, inRight) {
    if (preLeft > preRight || inLeft > inRight) return null;

    let rootVal = po[preLeft];
    let rootNode = new TreeNode(rootVal);
    let pIndex = map.get(rootVal);

    rootNode.left = recursion(po, preLeft + 1, pIndex - inLeft + preLeft, map, inLeft, pIndex - 1,);

    rootNode.right = recursion(po, pIndex - inLeft + preLeft + 1, preRight, map, pIndex + 1, inRight);

    return rootNode;
  }
  return recursion(preorder, 0, preLen - 1, map, 0, inLen - 1);
};
// @lc code=end

