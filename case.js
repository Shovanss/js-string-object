const school = 'B G H S';
console.log(school);
console.log(school.toLowerCase());

const course = 'chemistry';
const subject = 'Chemistry';
if(course === subject.toLowerCase()){
    console.log('perfect');
}
else{
    console.log('wrong');
}

// trim - vitorer whitespace gap k trm kore.

const fruit = ' onion';
const vege = 'onion';
if(fruit.trim() === vege){
    console.log('correct');
}
else{
    console.log('incorrect');
}