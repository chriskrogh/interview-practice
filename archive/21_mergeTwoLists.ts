/**
 * Merge two sorted linked lists and return it as a sorted list.
 * The list should be made by splicing together the nodes of the first two lists.
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

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

const printList = (l: ListNode | null) => {
  let res = '';
  while (l) {
    res += l.val + (l.next ? ' , ' : '');
    l = l.next;
  }
  console.log(res);
};

const l1Three = new ListNode(3);
const l1Two = new ListNode(2, l1Three);
const l1One = new ListNode(1, l1Two);

const l2Three = new ListNode(3);
const l2Two = new ListNode(2, l2Three);
const l2One = new ListNode(1, l2Two);

printList(mergeTwoLists(l1One, l2One));
// printList(l1One);
// printList(l2One);
