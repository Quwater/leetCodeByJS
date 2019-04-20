
let MyCalendar = function() {
    this.calendar = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    for (let i of this.calendar) {
        if (!(i.start >= end || i.end <= start)) {
            return false;
        }
    }
    this.calendar.push({start, end});
    return true;
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */