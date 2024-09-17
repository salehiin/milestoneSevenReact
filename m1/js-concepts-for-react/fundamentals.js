// How to declare a variable

const fatherName = 'Arnold';
let season = 'rainy';
season = 'winter';

// 2. conditions
// 6 basic conditions >, <, ===, !==, <=, >=
// multiple condition: &&, ||

if(fatherName ==== 'arnold' || season === 'rany'){

}
else if(fatherName === 'Arnold'){

}
else{

}

// 3. array

const numbers = [89, 35, 98, 12];
numbers[0] = 56;
// index, length, push

// 4. for loop
for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}


// 5. function
function multiply(num1, num2){
    const result = num1 * num2;
    return result;
}
const output = multiply(35, 78);

// 6. Object
const student = {
    name: 'Salib Khan',
    age: 32,
    movies; ['king khan', 'Dhakar Masten']
}
console.log(student.age); // direct by property
console.log(student['age']); // access via property name string
console.log(student[myVariable]); // access via property name in a variable
