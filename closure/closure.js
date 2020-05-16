// const showFullname = () => {
//     var nationality = 'Indian';
//     return {
//         fullname: (firstname, lastname) => {
//             return firstname+' '+lastname+' is '+nationality;
//         },
//         setNationality: (country) => {
//             nationality = country;
//         }
//     }
// }



// const person = showFullname();

// person.setNationality('USA');

// console.log(person.fullname('Vaibhav', 'Wadikar'));

// function init(args) {
//     const { firstName, lastName } = args;

//     function gerunding(action) {
//         return firstName + " " + lastName + " " + "is" + " " + action;
//     }
//     return gerunding;
// }

// var data = { firstName: "George", lastName: "Rooney" };
// var zombieOne = init(data);
// console.log(zombieOne("walking"));

// var names = ['Locke', 'Franklin', 'Smith', 'Mises'];
// var logName = function (name) {
//     console.log(name);
// };

// var makeClosure = function(name) {
//     return function() {
//         logName(name);
//     }
// };

// var name;
// for (var i = 0; i < names.length; i++) {
//     name = names[i];
//     setTimeout(makeClosure(name), 1000);
// }

// const whoAmI = (name) => {
//     let {firstname, lastname} = name;
//     return  {
//         getFirstName: () => firstname,
//         getLastName: () => lastname,
//         setFirstName: (fname) => {
//             firstname = fname;
//         },
//         setLastName: (lname) => {
//             lastname = lname;
//         }
//     }
// }

// const vaibhav = whoAmI({firstname: 'Vaibhav', lastname: 'Wadikar'});

// console.log(vaibhav.getFirstName());

// for (let i=0; i<10; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }


// for (var i=0; i<10; i++) {
//     (function(i) {
//         setTimeout(() => {
//             console.log(i);
//         }, 6000);
//     })(i);
// }

// console.log('I am out of for loop');


// const fullname = () => {
//     const middlename = 'Ramana';
//     const showFullname = (firstname, lastname) => {
//         return firstname + ' ' + middlename + ' ' + lastname;
//     }
//     return showFullname;
// }

// const person = fullname();

// console.log(person('Manisha', 'Rangaraju'));

// const fullname = (name) => {
//     let {firstname, lastname} = name;
//     return {
//         showFullname: () => {
//             console.log(firstname +' '+lastname);
//         },
//         getFirstName: () => firstname,
//         getLastName: () => lastname,
//         setFirstName: (fname) => firstname = fname,
//         setLastName: (lname) => lastname = lname
//     }
// }

// const person = fullname({firstname: 'Manisha', lastname: 'Rangaraju'});

// person.showFullname();

// console.log(person.getFirstName());

// person.setFirstName('Srikar');

// console.log(person.getFirstName());


// const get = (a, b, c) => {
//     return a+b+c;
// }

// get(8);


// function f(arg) {
//     console.log(arg);
// }

// f('foo');
// setTimeout(function() {
//     f('bar')
// }, 0);
// f('baz');

// const names = ['Vaibhav', 'Manisha', 'Amol', 'Saumil'];
// for (var i=0; i<names.length; i++) {
//     var name = names[i];
//     setTimeout(function() {
//         console.log(name);
//     }, 1000);
// }

// const personInfo = (person) => {
//     let {firstname, lastname} = person;
//     return {
//         getFullname: () => {
//             return firstname + ' ' + lastname;
//         },
//         setFirstname: (fname) => {
//             firstname = fname;
//         },
//         setLastname: (lname) => {
//             lastname = lname;
//         }
//     }
// }


// const vaibhav = {
//     firstname: 'Vaibhav',
//     lastname: 'Wadikar'
// };

// const person = personInfo(vaibhav);



// console.log(person);
// // console.log(vaibhav.lastname);

// console.log(person.getFullname());

// person.setFirstname('Vaibhu');

// console.log(person.getFullname());

// person.setLastname('Wadu');

// console.log(person.getFullname());

// const nums = [1,2,3];

// console.log(nums.slice(0));

// const len = "adam".length;
