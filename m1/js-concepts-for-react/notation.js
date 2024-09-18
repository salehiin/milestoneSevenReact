
// 37.8 - have to watch again

const person = {
    nam: 'Lal Nil Holud Mia',
    profession: 'Traffic Surgeon',
    age: 39,
    25: 'summer',
    'son-name': 'Sunny',
    address: 'Shahabag'
}

// dot notation
const prof1 = person.profession;


// bracket notation
const prof2 = person['profession'];
// OR
const pName = 'profession';
const prof3 = person[pName];
console.log(prof3); 

const season = person[25];
console.log(season);

const son = person["son-name"]