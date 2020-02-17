'use strict';
// wellcoming msg
var well = prompt("Welcom to my websit can we konw your name?");
console.log(well)
alert(`I am very happy to see you ${well} let's see if you know me very well`);
//  five Questions about me 
// Question no.1
var q1 = prompt("My nationality is syrian so do you think I was born in Syria?", "Answer only with (yes, y)(no ,n)");
console.log(q1)
switch (q1.toLowerCase()) {
    case 'yes':
    case 'y':
        alert(`Your answer ( ${q1} ) was wrong)`);
        break;
    case 'no':
    case 'n':
        alert(`Your answer ( ${q1}) was correct`);
        break;
    default:
        alert("Answer only with (yes, y)(no ,n)!");
}
// Question no.2
var q2 = prompt("I graduated from high school at 2012 and I studied civil engineering for two years and a half so the question is do you think I got my civil engineering certificate in 2014? ");
console.log(q2)
switch (q2.toLowerCase()) {
    case 'yes':
    case 'y':
        alert(`Your answer ( ${q2} ) was wrong)`);
        break;
    case 'no':
    case 'n':
        alert(`Your answer ( ${q2}) was correct`);
        break;
    default:
        alert("Answer only with (yes, y)(no ,n)!");
}
// Question no.3
var q3 = prompt(" This one will be easy, do I sutdy Advance coding?");
console.log(q3)
switch (q3.toLowerCase()) {
    case 'yes':
    case 'y':
        alert(`Your answer ( ${q3} ) was correct)`);
        break;
    case 'no':
    case 'n':
        alert(`Your answer ( ${q3}) was wrong`);
        break;
    default:
        alert("Answer only with (yes, y)(no ,n)!");
}
// Question no.4
var q4 = prompt(" Is the Supernatural tv series is my favorite tv series? ");
console.log(q4)
switch (q4.toLowerCase()) {
    case 'yes':
    case 'y':
        alert(`Your answer ( ${q4} ) was correct)`);
        break;
    case 'no':
    case 'n':
        alert(`Your answer ( ${q4}) was wrong`);
        break;
    default:
        alert("Answer only with (yes, y)(no ,n)!");
}
// Question no.5
var q5 = prompt(" For gaming do I prefer console devices (Xbox,ps4) over PC? ");
console.log(q5)
switch (q5.toLowerCase()) {
    case 'yes':
    case 'y':
        alert(`Your answer ( ${q5} ) was wrong)`);
        break;
    case 'no':
    case 'n':
        alert(`Your answer ( ${q5}) was correct `);
        break;
    default:
        alert("Answer only with (yes, y)(no ,n)!");
}
// Thanking the user to answer the question
alert (` Thank you ${well} it was a fun time hope we see again`)

