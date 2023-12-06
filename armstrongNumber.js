"use strict";
log(narcissistic(153))
function narcissistic(value) {
    // Code me to return true or false
    let goal = 0;
    let arr = String(value).split('');
    for(let i = 0; i < arr.length; i++) {
        goal += Math.pow(arr[i], arr.length);
    }
    return value === goal;
}