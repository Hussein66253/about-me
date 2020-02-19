'use strict';
// wellcoming msg
var well = prompt("Welcom to my websit can we konw your name?");
console.log(well)
var score = 0
alert(`I am very happy to see you ${well} let's see if you know me very well`);
//  seven Questions about me 
// Question no.1
function que1() {
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
            score = score + 1
            break;
        default:
            alert("Answer only with (yes, y)(no ,n)!");
    }
}
que1();

function que2() {
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
            score = score + 1
            break;
        default:
            alert("Answer only with (yes, y)(no ,n)!");
    }
}
que2();

function que3() {
    // Question no.3
    var q3 = prompt(" This one will be easy, do I sutdy Advance coding?");
    console.log(q3)
    switch (q3.toLowerCase()) {
        case 'yes':
        case 'y':
            alert(`Your answer ( ${q3} ) was correct)`);
            score = score + 1
            break;
        case 'no':
        case 'n':
            alert(`Your answer ( ${q3}) was wrong`);
            break;
        default:
            alert("Answer only with (yes, y)(no ,n)!");
    }
}
que3();

function que4() {
    // Question no.4
    var q4 = prompt(" Is the Supernatural tv series is my favorite tv series? ");
    console.log(q4)
    switch (q4.toLowerCase()) {
        case 'yes':
        case 'y':
            alert(`Your answer ( ${q4} ) was correct)`);
            score = score + 1
            break;
        case 'no':
        case 'n':
            alert(`Your answer ( ${q4}) was wrong`);
            break;
        default:
            alert("Answer only with (yes, y)(no ,n)!");
    }
}
que4();

function que5() {
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
            score = score + 1
            break;
        default:
            alert("Answer only with (yes, y)(no ,n)!");

    }
}
que5();

function que6() {
    // Question no.6 (guessing game)
    var favNam = 5;
    for (var i = 0; i < 4; i++) {
        var num = prompt("can you guess my favourite number?, 'it is between 1,9 ' ");
        console.log(num);

        if (num == favNam) {
            alert("Good guess!! ");
            score = score + 1
            break;
        } else if (num > favNam) {
            alert(` ${num} is heigher than my favourite number`)
        } else if (num < favNam) {
            alert(` ${num} is lower than my favourite number`)
        } else
            alert("the number must be between 1 and 9")
    }
}
que6();

function que7() {
    // Question no.7 (multiple possible correct answers)
    var favMucs = ['Adele', 'Alan Walker', 'Sia', 'Fouzia', 'Imagine Dragons', 'Anne Mari'];
    var test = 0
    for (var x = 0; x < 7; x++) {
        var val = prompt("How is my favorite musician?")
        for (var i = 0; i < favMucs.length; i++) {
            console.log(test)
            if (val === favMucs[i]) {
                alert(`you have chose my ${i + 1} value`);
                test = 1
                break;
            }

        }
        if (test === 1) {
            score = score + 1
            break;
        }

    }
}
que7();
// Thanking the user to answer the question
alert(` Thank you ${well} it was a fun time your mark is ${score} hope we see again`)
