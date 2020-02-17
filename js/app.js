'use strict';
// wellcoming msg
var well = prompt("welcom to my websit can we konw your name?");
alert(`Am very happy to see you ${well} let's see if you know me very well`);
//  five Qustions about me 
var q1 = prompt("My nationality is syrian so do you think I was born in Syria?", "Answer only with (yes, y)(no ,n)");
switch (q1.toLowerCase()) {
    case  'yes':
    case   'y':
        alert(`Your answer ( ${q1} ) was wrong)`);
        break;
    case  'no':
    case  'n' :
        alert(`Your answer ( ${q1}) was correct`);
        break;
        default:
            alert ("Answer only with (yes, y)(no ,n)!")
}
var q2 = prompt("");
switch (q2.toLowerCase()) {
    case  'yes':
    case   'y':
        alert(`Your answer ( ${q1} ) was wrong)`);
        break;
    case  'no':
    case  'n' :
        alert(`Your answer ( ${q1}) was correct`);
        break;
        default:
            alert ("Answer only with (yes, y)(no ,n)!")
}