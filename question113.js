/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @name Path Sum II
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
const pathSum = function (root, sum) {
    let res = [];
    if (!root) {
        return res;
    }
    let path = [],
        cur = sum;
    findPath(root, cur, path, res);
    return res;
};

const findPath = function (root, cur, path, res) {
    cur -= root.val;
    path.push(root.val);

    if (cur === 0 && !root.left && !root.right) {
        // 得到 path 的拷贝，防止之后 path 的变化
        res.push(path.slice());
    }

    if (root.left) {
        findPath(root.left, cur, path, res);
    }
    if (root.right) {
        findPath(root.right, cur, path, res);
    }
    path.pop();
};

pathSum([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1], 22);
