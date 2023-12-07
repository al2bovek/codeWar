const test = [2, 1, 1, 2, 1, -1, 0, 0, 3, -1, 3, -9, 4, 7, -13, 9];
log(isMadhavArray(test));
function isMadhavArray(arr){
    if(arr.length <= 2) return !arr.length;
    const goal = [];
    let n = goal.length;
    for(let i = 1; i < arr.length; i ++) {
        n += goal.length;
        if(arr.slice(n, n + i).length === i) goal.push(arr.slice(n, n + i));
    }
    let sum;
    result(goal);
    function result(arr) {
        for(let elem of arr) {
            sum = 0;
            for(let el of elem) {
                sum += el;
            }
        }
    }
    return sum === +goal[0];
}
