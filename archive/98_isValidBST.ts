import { TreeNode } from './utils/TreeNode';

function isValidBST(
  root: TreeNode | null,
  min?: number,
  max?: number,
): boolean {
  if (!root) return true;
  return (
    root.val > (min ?? Number.MIN_SAFE_INTEGER) &&
    root.val < (max ?? Number.MAX_SAFE_INTEGER) &&
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
}

const one = new TreeNode(1);
const three = new TreeNode(3);
const two = new TreeNode(2, one, three);

console.log(isValidBST(two));
