37.6

// 'almas', 5, true, {}, []
// '', 0, false, null, undefined

let myVar = 5;
// check any truthy
if(myVar){
    myVar = myVar*100;
}
else {
    myVar = 0;
}

let myMoney = 50;
// check negative or falsy anything
if(!myMoney){

}

const money = 800;
let food;
if(money > 100){
    food = 'biryani';
}
else{
    food = 'cha biscuit';
}

// ternary
let food1 = money > 100 ? 'biryani' : 'cha biscuit';
console.log(food1);

let drink = (money > 100 && myVar > 100) ? 'coke' : 'water';
console.log(drink);

// number to string convert
const num1 = 52;
console.log(num1);
const numStr = num1 + '';
console.log(numStr);

// string to number
const input = '560';
const inputNum = +input;
console.log(inputNum);

// 
let isActive = true;
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide User');
isActive ? showUser() : hideUser();
isActive && showUser(); // if left side true then rightside will be executed
!isActive || hideUser(); // if left side false then rightside will be executed

// toggle - for boolean check
isActive = !isActive;