"use strict";
log(tArea('\n.\n. .\n. . .\n. . . .\n'));
function tArea(tStr) {
    let arr, a;
    arr = tStr.split('.');
    arr.pop();
    a = arr.slice(arr.lastIndexOf('\n') + 1).length
    return a * a / 2;
}