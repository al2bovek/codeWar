"use strict";
const multiplicationTable = function(size) {
    const table = [];
    for(let i = 0; i < size; i++) table.push([]);
    for(let i = 0; i < size; i++) {
      for(let j = 1; j <= size; j++)  
        table[i].push((i + 1) * j);
}
 return table;
}
log(multiplicationTable(3));