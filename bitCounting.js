"use strict";
const countBits = function(n) {
    return n.toString(2).split('').filter((el) => el == 1).length;
};
log(countBits(123));