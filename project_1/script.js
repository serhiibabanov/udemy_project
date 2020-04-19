'use strict';
let money;
let time;
money = prompt("Your budget for a month?","");
time = prompt("Enter date in format YYYY-MM-DD","");
let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    saving : false
};
let expenses = prompt("Enter a required cost item this month","");
let expensesMoney = prompt("How much will it cost?","");
appData.expenses.expenses = expensesMoney;
console.log("Your budget for a 1 day - " + appData.budget / 30);
