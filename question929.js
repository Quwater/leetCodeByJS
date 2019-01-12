/**
 * @param {string[]} emails
 * @return {number}
 */
let numUniqueEmails = function(emails) {
    let arr = [];
    for (const i of emails) {
        let domin = i.substring(i.indexOf('@'), i.length);
        let withoutPlus = i. substring(0, i.indexOf('+'));
        let removeDot = withoutPlus.replace(/\./g, '');
        let email = removeDot.concat(domin);
        if (!(arr.includes(email))) {
            arr.push(email);
        }
    }
    return arr.length;
};
numUniqueEmails();