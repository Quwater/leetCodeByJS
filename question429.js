/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
let levelOrder = function(root) {
    let res = [];
    levelOrderHelper(root, 0, res);
    return res;
};
let levelOrderHelper = function(root, level, res) {
    if(root === null){
        return;
    }
    
    if(res.length <= level){
        res.push([]);
    }
    
    res[level].push(root.val);
    for(let idx in root.children){
        levelOrderHelper(root.children[idx], level + 1, res);
    }
};

levelOrder();