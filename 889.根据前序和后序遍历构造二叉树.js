/*
 * @lc app=leetcode.cn id=889 lang=javascript
 *
 * [889] 根据前序和后序遍历构造二叉树
 *
 * https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/description/
 *
 * algorithms
 * Medium (64.74%)
 * Likes:    96
 * Dislikes: 0
 * Total Accepted:    5.5K
 * Total Submissions: 8.4K
 * Testcase Example:  '[1,2,4,5,3,6,7]\n[4,5,2,6,7,3,1]'
 *
 * 返回与给定的前序和后序遍历匹配的任何二叉树。
 * 
 * pre 和 post 遍历中的值是不同的正整数。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：pre = [1,2,4,5,3,6,7], post = [4,5,2,6,7,3,1]
 * 输出：[1,2,3,4,5,6,7]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= pre.length == post.length <= 30
 * pre[] 和 post[] 都是 1, 2, ..., pre.length 的排列
 * 每个输入保证至少有一个答案。如果有多个答案，可以返回其中一个。
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
 * 解题思路 同105 106题
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function (pre, post) {

  let preLen = pre.length, postLen = post.length;
  if (preLen !== postLen) return null;

  function recursion (pre, post, preLeft, preRight, postLeft, postRight) {
    if (preLeft > preRight || postLeft > postRight) return null;
    //创建节点
    let rootNode = new TreeNode(pre[preLeft]);
    if (preLeft === preRight) return rootNode;

    // 因为前后续遍历序列，根节点不在中间，无法确定子区间的左右边界值
    // 即查找 后序遍历子区间的右边界mid的值，
    // 循环查找，如果前序遍历子区间的左边界 === 后序遍历子区间的右边界值，此时mid就是需要的值。
    let mid = postLeft;
    while (pre[preLeft + 1] !== post[mid]) mid++;

    rootNode.left =
      recursion(pre, post, preLeft + 1, preLeft + 1 + mid - postLeft, postLeft, mid);
    rootNode.right =
      recursion(pre, post, preLeft + 2 + mid - postLeft, preRight, mid + 1, postRight - 1);
    return rootNode;
  }

  return recursion(pre, post, 0, preLen - 1, 0, postLen - 1);
};
// @lc code=end

