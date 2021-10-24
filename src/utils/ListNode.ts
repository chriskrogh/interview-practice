/* eslint-disable @typescript-eslint/no-this-alias */
export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  public print() {
    let cur: ListNode | null = this;
    let res = '';
    while (cur) {
      res += cur.val + (cur.next ? ' , ' : '');
      cur = cur.next;
    }
    console.log(res);
  }
}
