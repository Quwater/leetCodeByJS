/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @name Unique Binary Search Trees II
 * @param {number} n
 * @return {TreeNode[]}
 */
const generateTrees = function (n) {
    if (n === 0) {
        return [];
    } else {
        return generatePartTrees(1, n);
    }
};

const generatePartTrees = function (start, end) {
    let listTrees = [];
    if (start > end) {
        listTrees.push(null);
        return listTrees;
    }
    for (let i = start; i <= end; i++) {
        let leftTrees = generatePartTrees(start, i - 1);
        let rightTrees = generatePartTrees(i + 1, end);
        for (let left of leftTrees) {
            for (let right of rightTrees) {
                let cur = new TreeNode(i);
                cur.left = left;
                cur.right = right;
                listTrees.push(cur);
            }
        }
    }
    return listTrees;
};

generateTrees(3);
