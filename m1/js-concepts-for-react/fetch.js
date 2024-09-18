


//  37.5

// 1. JSON
const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Masten']
}

const studentJson = JSON.stringify(student);  // Object convert to JSON
console.log(student);
console.log(studentJson);

const studentObj = JSON.parse(studentJson);  // JSON convert to Object
console.log(studentObj);

// 2. fetch - below 3 line should be commented otherwise it will show error
fetch('url')
.then(res => res.json())
.then(data => console.log(data));

// 3. keys, values
const keys = Object.keys(student);
const values = Object.values(student);

// 4. for
const numbers = [23, 54, 67, 87, 23, 78];
numbers.forEach( num => console.log(num));
numbers.map(num => num * 2);

// for of used on array like Object
// for in used on loop on an object

// add or remove from an array

const products = [
    {name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: 7000, brand: 'iphone', color: 'golden'},
    {name: 'watch', price: 3000, brand: 'casio', color: 'yellow'},
    {name: 'sunglass', price: 300, brand: 'ribon', color: 'black'},
    {name: 'camera', price: 9000, brand: 'canon', color: 'silver'},
    // {name: 'laptop', price: 32000, brand: 'canon', color: 'gray'},
]
const newProduct = {name: 'webcam', price: 700, brand: 'logitech'};

// copy productys array add then add newProduct
const newProducts = [...products, newProduct];
console.log(newProducts)

// create a new array without one specific item
// remove phone means create a ne array without the phone
const remaining = products.filter(product => product.name !== 'phone')
console.log(remaining)