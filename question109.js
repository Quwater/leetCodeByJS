/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @name Convert Sorted List to Binary Search Tree
 * @param {ListNode} head
 * @return {TreeNode}
 */
const sortedListToBST = function (head) {
    // let arr = [];
    // while (head) {
    //     arr.push(head.val);
    //     head = head.next;
    // }
    // function helper(arr) {
    //     if (arr.length === 0) {
    //         return null;
    //     }
    //     let mid = Math.floor(arr.length / 2);
    //     let node = new TreeNode(arr[mid]);
    //     node.left = helper(arr.slice(0, mid));
    //     node.right = helper(arr.slice(mid+1));
    //     return node
    // }
    // return helper(arr);
    let len = 0;
    if (!head) {
        return null;
    }
    let h = head;
    while (head) {
        head = head.next;
        len++;
    }

    function buildBST(start, end) {
        // 中序遍历
        if (start > end) return null; // 递归的出口，返回null节点
        const mid = (start + end) >>> 1; // 求mid，不是为了构建它，是为了分治
        const left = buildBST(start, mid - 1);
        const root = new TreeNode(h.val); // 按 h.val 构建节点

        h = h.next; // h指针步进
        root.left = left; // root构建出来了，接上左子树

        root.right = buildBST(mid + 1, end); // 构建当前root的右子树
        return root;
    }
    return buildBST(0, len - 1);
};
