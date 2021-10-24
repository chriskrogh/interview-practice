/**
 * Given the root of a complete binary tree, return the number of the nodes in the tree.
 * According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree,
 * and all nodes in the last level are as far left as possible.
 * It can have between 1 and 2^h nodes inclusive at the last level h.
 * Design an algorithm that runs in less than O(n) time complexity.
 */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function countNodes(root: TreeNode | null): number {
  if (!root) return 0;

  let l = 0,
    r = 0;

  let ptr_r: TreeNode | null = root;
  let ptr_l: TreeNode | null = root;

  while (ptr_l) {
    ptr_l = ptr_l.left;
    l++;
  }
  while (ptr_r) {
    ptr_r = ptr_r.right;
    r++;
  }

  if (l == r) return Math.pow(2, l) - 1;

  return 1 + countNodes(root.left) + countNodes(root.right);
}

// create test tree
const four = new TreeNode(4);
const five = new TreeNode(5);
const six = new TreeNode(6);

const two = new TreeNode(2, four, five);
const three = new TreeNode(2, six);

const one = new TreeNode(1, two, three);

console.log(countNodes(one));

/**
 * The runtime is log(n) * log(n)
 * The idea is that we calculate the height of the left side and the right side
 * If they are equal, the tree is full and we can calculate the number of nodes in between
 * Otherwise, we do this for the nodes in between
 */
