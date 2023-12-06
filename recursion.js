"use string";
log(countup(9));
function countup(n){
    if(n < 1) return [];
    else {
        //        log(n);
        const arr = countup(n - 1);
        //        log(n);
        arr.push(n);
        return arr;
    }
}

log(countdown(9));
function countdown(n){
    if(n < 1) return [];
    else {
        //        log(n);
        const arr = countdown(n - 1);
        //        log(n);
        arr.unshift(n);
        return arr;
    }
}


log(range(6, 9));
function range(start, end) {
    if (end < start) {
        return [];
    } else {
        const arr = range(start, end - 1);
        arr.push(end);
        return arr;
    }
}
