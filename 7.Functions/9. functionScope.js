
function userDetails() {
    const userName = "baji shaik";
    let age = 23;
    let city = "guntur"

    console.log({
        Name: userName,
        age: 20,
        city: city
    })

}

userDetails()  //returns :- { Name: 'baji shaik', age: 23, city: 'guntur' }

console.log(userName); // returns a ReferenceError: userName is not defined (because we cant access a variable outside a function)