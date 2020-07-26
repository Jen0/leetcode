/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (62.85%)
 * Likes:    1125
 * Dislikes: 0
 * Total Accepted:    297.5K
 * Total Submissions: 472.2K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 * 
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 方法二 迭代
 * 空间复杂度O(n)
 * 时间复杂度O(1)
 * 解题思路
 * 1. 创建一个前置节点（哨兵）
 * 2. 迭代开始 —— 比较两节点的值
 *    将 哨兵节点 及 哨兵节点的next节点 都指向 值小的节点，同时，值小的节点切换至它的next节点
 * 3. 迭代结束(必有一链表迭代结束) 此时将哨兵节点的next 指向 还有后续节点的链表节点。   
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  let dummy = new ListNode(-1), previous = dummy;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      previous = previous.next = l1;
      l1 = l1.next;
    } else {
      previous = previous.next = l2;
      l2 = l2.next;
    }
  }
  previous.next = l1 ? l1 : l2;
  return dummy.next;
};
// @lc code=end


/**
 * 方法一 递归
 * 空间复杂度O(n)
 * 时间复杂度O(n)
 * 解题思路
 * 1. 比较两节点的值，谁小就返回哪个。
 * 2. 并且在返回之前，将值小的节点的next，指向，下次比较之后值小的节点。
 *    其中下次比较的两节点是： 值小的next节点 和 值大的节点
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  if (l1.val <= l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1
  }
  l2.next = mergeTwoLists(l1, l2.next);;
  return l2
};