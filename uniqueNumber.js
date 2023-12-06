"use strict";
let arr = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, -0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3];
log(arr.length);
log(findUniq(arr));
function findUniq(arr) {    
    let goal, min, max;
    let count = 0;
    if(arr.length > 1000) {
        for(let i = 0; i < arr.length; i += 1000) {
            max = Math.max(...arr.slice(i, i += 1000));
            min = Math.min(...arr.slice(i, i += 10));
            if(min !== max) {
                arr.map((el) => {if(el !== max) return count++});
                if(count > 1) return goal = max;
                return goal = min;
            }
        }
    }
    max = Math.max(...arr);
    min = Math.min(...arr);
    if(min !== max) {
        arr.map((el) => {if(el !== max) return count++});
        if(count > 1) return goal = max;
        return goal = min;
    } return 'no unique';
    return goal;
}