const moment = require("moment");

function sayMyName(name){
    console.log(name);
    console.log(moment().format('HH:mm'));
}

function countFunc(number){
    while(number <= 50){
        number += 5
        console.log("Number at now: " + number);
    }
}

sayMyName("Hisenberg");
console.log("---\n");
countFunc(5);