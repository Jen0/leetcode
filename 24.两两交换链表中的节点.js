/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 *
 * https://leetcode-cn.com/problems/swap-nodes-in-pairs/description/
 *
 * algorithms
 * Medium (65.81%)
 * Likes:    530
 * Dislikes: 0
 * Total Accepted:    115.9K
 * Total Submissions: 175.9K
 * Testcase Example:  '[1,2,3,4]'
 *
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 * 
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 * 
 * 
 * 
 * 示例:
 * 
 * 给定 1->2->3->4, 你应该返回 2->1->4->3.
 * 
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 方法二：迭代
 * 优化方案     
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let dummy = { next: head, val: 1 }, previous = dummy;
  while (previous.next && previous.next.next) {
    let first = previous.next, second = first.next;
    first.next = second.next;
    previous.next = second;
    // [first.next, previous.next] = [second.next, second];
    previous = second.next = first;
  }
  return dummy.next;
};
// @lc code=end

/**
 * 方法二：迭代
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 * 1. 创建一个虚拟前置节点（哨兵），将它的next节点 指向 头结点
 * 2. 迭代
 * 2.1 记录当前节点（first）和它的next节点（second）
 *     形成三个节点顺序： 哨兵 -> first -> second
 * 2.2 两两交换操作：
 *       哨兵的next -> second
 *       first.next -> second.next
 *       second.next -> first
 *     组成新的节点顺序：哨兵 -> second -> first
 * 2.3 更新哨兵位置
 *     将哨兵更新至 first 位置
 *     将first位置更新至 下一次的first位置 进入下一次迭代。
 *     组成新的节点顺序：old second -> old first -> 哨兵 -> first -> second
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  const dummy = new ListNode(-1)
  dummy.next = head;
  let previous = dummy;

  while (head && head.next) {
    let first = head, second = head.next;
    // 交换
    previous.next = second,
      first.next = second.next,
      second.next = first,
      // [previous.next, first.next, second.next] = [second, second.next, first];
      // 更新前置节点（都是奇数节点）
      previous = first, head = first.next;
  }
  return dummy.next;
};

/**
 * 方法一：递归
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 * 1. 将当前节点的next节点 指向 它的next节点 的 next节点
 * 2. 将当前节点的next节点 的next节点 指向 当前节点。
 * 3. 返回当前节点的next节点
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) return head;
  let next = head.next;
  // 递归的都是奇数节点，实现两两交换
  head.next = swapPairs(next.next);
  next.next = head;
  return next;
};
