// Create a blocked scope
{
    var abc = 100;
    let xyz = 200;
}

// Here we can access `abc` identifier value, but we can't have access to `xyz` identifier

// Don't get confuse with {} has an object
var myDetails = {
    key: 'value',
    name: 'shaik',
    age: 30,
    designation: 'Backend Developer'
}


var city = "Guntur";
let designation = "Backend Dev";

{
    var city = "guntur";
    let designation = "backend Dev"
}

city // "guntur";
designation // "backend Dev";


console.log("shaik")
console.log( 23 > 78 );