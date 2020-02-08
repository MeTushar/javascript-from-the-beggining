//you can create an object using {}, also known as onject
//literals
const person = {
  name: "Tushar Mehrotra",
  role: "Frontend Engineer",
  email: "xyz@gmail.com",
  doj: "1/1/2020",
  skills: ["html", "css", "javascript", "react", "angular"],
  address: {
    city: "Bangalore"
  },
  getEmail: function() {
    return this.email;
  }
};

let val;

//accessing properties of an object
// You can either access property using . notation
val = person.name;

//You can also access properties of an object using
val = person["role"];

//You can use any datatype as value of an object

//if you want to use any property inside objects method
//you need to use this keyword(it behaves like object)
val = person.getEmail();

//for nested object you can access the property the same way
val = person.address.city;

//for accessing particular value from array
val = person.skills[2];

console.log(val);
