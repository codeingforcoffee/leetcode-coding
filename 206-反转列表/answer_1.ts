import { ListNode } from "./type";

function reverseList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;
  let prev: ListNode | null = null;
  let cur: ListNode | null = head;
  while (cur) {
    const nextNode = cur.next;
    cur.next = prev;
    prev = cur;
    cur = nextNode;
  }
  return prev;
}
