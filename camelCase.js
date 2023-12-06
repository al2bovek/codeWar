"use strict";
log(camelCase('camel cAse'));
function camelCase(string) {
    let goal = string.split(' ');
    for(let i = 0; i < goal.length; i++) {
        goal[i] = goal[i].at(0).toUpperCase() + goal[i].slice(1).toLowerCase();
    }
    return goal.join('');
}

String.prototype.camelCase = function() {
    const goal =  this.split(' ');
    for(let i = 0; i < goal.length; i++) {
        goal[i] = goal[i].at(0).toUpperCase() + goal[i].slice(1).toLowerCase();

    }

        return  goal.join('');
    }
    log('camEl case tWo'.camelCase());

String.prototype.camelCase_2 = function(){
    return this.split(' ').map((el) => el.slice(0, 1).toUpperCase() + el.slice(1).toLowerCase())
        .join('');
}
log('camEl case shorT'.camelCase_2());