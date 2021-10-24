import { ListNode } from 'utils/ListNode';

/**
 * Merge two sorted linked lists and return it as a sorted list.
 * The list should be made by splicing together the nodes of the first two lists.
 */

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  if (!l2 && !l1) return null;

  const head: ListNode | null = new ListNode();
  let cur = head;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      cur.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      cur.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    cur = cur.next;
  }
  cur.next = !l1 ? l2 : l1;

  return head.next;
}

const l1Three = new ListNode(3);
const l1Two = new ListNode(2, l1Three);
const l1One = new ListNode(1, l1Two);

const l2Three = new ListNode(3);
const l2Two = new ListNode(2, l2Three);
const l2One = new ListNode(1, l2Two);

mergeTwoLists(l1One, l2One)?.print();
// printList(l1One);
// printList(l2One);
