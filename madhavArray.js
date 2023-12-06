const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
log(getMadhavArray(test));
function getMadhavArray(arr){
    let goal = [];
    let n = goal.length;
    for(let i = 1; i < arr.length; i ++) {
        n += goal.length;
        goal.push(arr.slice(n, n + i));
        if(goal.at(-1).at(-1) === arr.at(-1)) return goal;
    }
}
