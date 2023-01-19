let friends = [
    'Manoj',
    'ganesh',
    'vamsi',
    'arif',
    'rehman*'
];

console.log(friends.length);

const friendsLength = friends.length;

let index = 0;

while (index < friendsLength){
    console.log(`welocome ${friends[index]}`)
    index++;
};

console.log('-----------------------------------------')

for (let i = 0 ; i < friendsLength ; i++){
    console.log(`welcome ${friends}`)};


//iternating with forEachMethod ;

friends.forEach((value , index, third)=> {
    console.log('------------------------------')
    console.log(`value of first param,`,value);
    console.log(`value of index param,`,index);
    console.log(`value of third param,`,third);
});


let studentsMarks = [45,89,54,36,98,100,850];
console.log("studentsMarks",studentsMarks);

studentsMarks.forEach((value)=>{
    console.log(value)
});

console.log('------------------------------------')

studentsMarks.forEach((value , index)=>{
    console.log(`index = ${index} | marks = ${value}`)
});

function elterate (v , i ,arr){
    console.log('----------------------------------')
    console.log(`values = ${v} | index = ${i} | array = ${arr}`)
};

studentsMarks.forEach(elterate);

let Marks = function(values){
    console.log(`loop values = ${values}`)
};

const numbers = [56,54,96];
numbers.forEach(Marks);

