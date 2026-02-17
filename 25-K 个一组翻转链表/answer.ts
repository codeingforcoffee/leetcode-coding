import { ListNode } from "./type";

// 反转前 k 个节点，返回新的头节点
function reverseKNodes(head: ListNode | null, k: number): ListNode | null {
  let prev: ListNode | null = null;
  let curr: ListNode | null = head;

  for (let i = 0; i < k; i++) {
    if (!curr) return head; // 不足 k 个，不反转
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

// 获取第 k 个节点
function getKthNode(head: ListNode | null, k: number): ListNode | null {
  let curr = head;
  for (let i = 0; i < k - 1; i++) {
    if (!curr) return null;
    curr = curr.next;
  }
  return curr;
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (!head || k <= 1) return head;

  // 检查是否有足够的 k 个节点
  const kthNode = getKthNode(head, k);
  if (!kthNode) return head; // 不足 k 个，不反转

  // 保存下一组的头节点
  const nextHead = kthNode.next;

  // 断开连接，反转当前组
  kthNode.next = null;
  const newHead = reverseKNodes(head, k);

  // 连接：原头部（现在是尾部）的 next 指向下一组反转后的结果
  head.next = reverseKGroup(nextHead, k);

  return newHead;
}
