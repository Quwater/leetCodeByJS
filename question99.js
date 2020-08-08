/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @name Recover Binary Search Tree
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
const recoverTree = function (root) {
    let nums = [];
    inorder(root, nums);
    let arr = findSwappedNum(nums);
    recover(root, 2, arr);
    return root;
};

function inorder(root, nums) {
    if (!root) {
        return;
    }
    inorder(root.left, nums);
    nums.push(root.val);
    inorder(root.right, nums);
}

function findSwappedNum(nums) {
    let first = -1,
        second = -1;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            second = nums[i + 1];
            if (first === -1) {
                first = nums[i];
            } else {
                break;
            }
        }
    }
    return [first, second];
}

function recover(root, count, arr) {
    if (root) {
        if (root.val === arr[0] || root.val === arr[1]) {
            root.val = root.val === arr[0] ? arr[1] : arr[0];
            if (--count === 0) {
                return;
            }
        }
        recover(root.left, count, arr);
        recover(root.right, count, arr);
    }
}

recoverTree();
