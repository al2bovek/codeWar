"use strict";
log(isMagicThree([1, 2, 7, -11, 4, 5, 7, 3]));
function isMagicThree(array) {
    for (let elem of array)
        for (let el of array)
            for (let e of array) if (elem + el + e === 0) return elem + el + e === 0;
    return elem + el + e === 0;
}