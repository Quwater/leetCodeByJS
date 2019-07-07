/**
 * @name Defanging an IP Address
 * @param {string} address
 * @return {string}
 */
let defangIPaddr = function(address) {
    let arr = address.split('.');
    return arr.join('[.]');
};
defangIPaddr('1.1.1.1');
