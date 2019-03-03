/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
// O(n)
let subdomainVisits = function (cpdomains) {
    let table = {},
        res = [];
    for (let i of cpdomains) {
        let arr = i.split(' '),
            domain = arr[1];
        while (domain) {
            table[domain] = table[domain] + parseInt(arr[0]) || parseInt(arr[0]);
            if (domain.indexOf('.') !== -1) {
                domain = domain.slice(domain.indexOf('.') + 1);
            } else {
                domain = '';
            }
        }
    }
    for (let i in table) {
        res.push(table[i] + ' ' + i);
    }
    return res;
};
subdomainVisits(['9001 discuss.leetcode.com']);