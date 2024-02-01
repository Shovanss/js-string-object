const person = {
    name: 'Shoaib Hossain',
    age: 24,
    profession: 'developer',
    study: 'full-time',
    'fav places': ['Kashmir, Bali']
}
for(const prop in person){
    // console.log(prop);
    // console.log(person[prop]);
}

const keys = Object.keys(person);
console.log(keys);

for(const key of keys){
    console.log(key, ':', person[key]);
}
