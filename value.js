const person = {
    name: 'Shoaib Hossain',
    age: 24,
    profession: 'developer',
    study: 'full-time',
    'fav places': ['Kashmir, Bali']
}
person.age = 25;
person['fav places'] = ['ctg','taka'];
const keyName = 'profession';
// console.log(person);
console.log(person[keyName]);

const propName = 'profession';
person[propName] = 'devops';
console.log(person);