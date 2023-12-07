"use strict";
log(spoonerize('hard words'))
function spoonerize(words) {
    let arr = words.split(' ');
    let result = arr[1].slice(0, 1) + arr[0].slice(1) + ' ' + arr[0].slice(0, 1) + arr[1].slice(1);
    return result;  
}