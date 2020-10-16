/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @name Even Odd Tree
 * @param {TreeNode} root
 * @return {boolean}
 */
const isEvenOddTree = function (root) {
    if (!root) {
        return false;
    }
    let isEven = true;
    let stack = [root];
    while (stack.length > 0) {
        if (isEven) {
            if (!isUp(stack) || !isOddAll(stack)) {
                return false;
            }
        } else {
            if (!isDown(stack) || !isEvenAll(stack)) {
                return false;
            }
        }
        isEven = !isEven;
        let len = stack.length;
        for (let i = 0; i < len; i++) {
            if (stack[i] && stack[i].left) {
                stack.push(stack[i].left);
            }
            if (stack[i] && stack[i].right) {
                stack.push(stack[i].right);
            }
        }
        stack = stack.slice(len);
    }
    return true;
};

function isEvenAll(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].val % 2 === 1) {
            return false;
        }
    }
    return true;
}

function isOddAll(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].val % 2 === 0) {
            return false;
        }
    }
    return true;
}

function isUp(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1].val <= arr[i].val) {
            return false;
        }
    }
    return true;
}

function isDown(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1].val >= arr[i].val) {
            return false;
        }
    }
    return true;
}
