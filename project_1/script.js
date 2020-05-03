'use strict';
let money;
let time;
money = +prompt("Your budget for a month?","");
time = prompt("Enter date in format YYYY-MM-DD","");
let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    saving : false
};
/* for (let i = 0; i < 2; i++){
    let a = prompt("Enter a required cost item this month","");
    let b = +prompt("How much will it cost?","");
    if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' ){
        console.log("done");
        appData.expenses[a] = b;
    } else {
        i--;
    }
} */

/* let i = 0;
while ( i < 2) {
    let a = prompt("Enter a required cost item this month","");
    let b = +prompt("How much will it cost?","");
    if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' ){
        console.log("done");
        appData.expenses[a] = b;
    } else {
        i--;
    }
    i++;
} */

let i = 0;
 do {
    let a = prompt("Enter a required cost item this month","");
    let b = +prompt("How much will it cost?","");
    if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' ){
        console.log("done");
        appData.expenses[a] = b;
    } else {
        i--;
    }
    i++;
} while ( i < 2);

appData.MoneyPerDay = appData.budget / 30;
if (appData.MoneyPerDay < 100){
    console.log("Low");
} else if (appData.MoneyPerDay > 100 && appData.MoneyPerDay <3000){
    console.log("Medium");
} else if (appData.MoneyPerDay > 3000){
    console.log("High");
} else {
    console.log("Error");
}
console.log("Your budget for a 1 day - " + appData.MoneyPerDay);
