"use strict";
console.log(whatCentury('2023'))
function whatCentury(year) {
    if(year < 1000) return 'it\'s works with years from 1000 only';
    if(year % 100 === 0) return year.slice(0,2) + 'th';
    let century, ending;
    century = +year.slice(0,2) + 1;
    if(century <= 20) return century + 'th';
    if(century > 20) {
        switch(century % 10) {
            case 1: ending = 'st';
                break;
            case 2: ending = 'nd';
                break;
            case 3: ending = 'rd';
                break;
            default: ending = 'th';
                break;
        }
        return century + ending;
    }
}