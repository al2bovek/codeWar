"use strict";
log(spinWords('Honor is earned for each new codewarrior who joins'));
function spinWords(string) {
    let goal = string.split(' ');
    for(let i = 0; i < goal.length; i++) {
        if(goal[i].length >= 5) goal[i] = goal[i].split('').reverse().join('');
    }
    return goal.join(' ');
}