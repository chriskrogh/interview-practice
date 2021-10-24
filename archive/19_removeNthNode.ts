import { ListNode } from './utils/ListNode';

/**
 * Given the head of a linked list, remove the nth node
 * from the end of the list and return its head.
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) return null;
  if (!head.next) return null;

  let cur: ListNode | null = head;

  let count = 0;
  while (cur) {
    count++;
    cur = cur.next;
  }

  let i = 0;
  count -= n;
  cur = head;
  if (count > 0) {
    while (i < count - 1) {
      cur = cur?.next ?? null;
      ++i;
    }
    cur!.next = cur!.next?.next ?? null;
  } else {
    head = head.next;
  }

  return head;
}

const Four = new ListNode(4);
const Three = new ListNode(3, Four);
const Two = new ListNode(2, Three);
const One = new ListNode(1, Two);

removeNthFromEnd(One, 2)?.print();
