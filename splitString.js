"use strict";
log(solution('function solution another'));
function solution(str){
    let goal = [];
    let n = 1;
    let arr = str.split(' ').join('').split('');
    for(let i = 0; i < arr.length; i += 2) {
        if(!arr[n]) arr[n] = '_'
        goal.push(arr[i] + arr[n]);
        n += 2;
    }
    return goal;
}