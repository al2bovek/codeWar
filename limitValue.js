"use strict";
log(smallEnough([3, 66], 10));
function smallEnough(a, limit) {
    for(let el of a) {
      if(el > limit)  return false;
    }
return true;
}

