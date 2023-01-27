const students = [];
console.log(students.length);
// Array  adding .push method
const push_mehod = students.push("baji","manoj","ganesh");
console.log(students);

// array adding using .length = 

const length_add = students[students.length] = "vamsi";
console.log(students);

// adding names using unshift to arrey in front = 

students.unshift("bajishaik");
console.log(students);

// Merging arrays with .concat() Method

const school_frnds = ['vamsi','dilip','rehman','arif'];
const colleage_frnds = ['chintu','jasir','sameer','raghava'];

const all_frnds = school_frnds.concat(colleage_frnds);
console.log(all_frnds);

// Convert Array values to String with separator by using .join()
const join_method = all_frnds.join(' | ');
console.log(join_method);

// taking wanted names by using .slice()Method
const first_two_students = all_frnds.slice(0,3);
console.log(first_two_students);

// we can use another type also
const secoundvalue = all_frnds.slice(-2);
console.log(secoundvalue);

// taking first name bye .shift method
const first_student = all_frnds.shift();
console.log(first_student); 

//taking last name by .pop Method 

const last_student = all_frnds.pop();
console.log(last_student);

// Remove values from array (THese methods will modify original array);
// .shift()   // return removed Value
// .pop()     // return removed Value
// .splice()  // return removed array of values


const delete_students = all_students.splice(2, 1); // ['Apsar'];
console.log(delete_students);
console.log(all_students); // [ 'jotika', 'sravani', 'kousalya

