/*
 * @lc app=leetcode.cn id=160 lang=typescript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  if (headA === null || headB === null) {
    return null;
  }

  let p = headA;
  let q = headB;
  while (p !== q) {
    if (p === null) {
      p = headB;
    }

    if (q === null) {
      q = headA;
    }

    if (p === q) {
      return p;
    }

    p = p.next;
    q = q.next;
  }
  return p;
};
// @lc code=end

