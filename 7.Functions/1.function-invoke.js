console.log("Hello Functions....");
console.log( 56 * 99 );
console.log(true === false);

var a = 10; // number
let b = "20"; // string
const c = true; // boolean

console.log( a + b + c );


const user = {
  firstname: "Syed",
  lastname: "Hussain",
  company: "trangla",
  city: "guntur"
}

const friends = ['Harish', "Harsha", 'Mani'];

const adil = {
  firstname: 'Adil',
  lastname: 'shaik',
  company: 'hcl',
  city: 'guntur'
}

var name = "baji";

            // name         parameters (total 4) 
function createUserDetails(userFirstName, lastName, companyName, cityName) {
  const user = {
    firstname: userFirstName,
    lastName: lastName,
    company: companyName,
    city: cityName
  }

  return user;
}

const salary = 10000;
const hike = salary + 5000; // 15000

const newUser = createUserDetails('shaik', "khaja", 'SAP Labs', 'Hyderabad'); // it will return an user object (value)
console.log(newUser);






  






