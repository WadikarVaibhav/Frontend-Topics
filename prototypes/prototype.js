// class Vehicle {

// 	constructor(model, brand) {
// 		this.model = model;
// 		this.brand = brand;
// 	}

// 	getCarName() {
// 		return this.brand+' '+this.model;
// 	}
// }

// const civic = new Vehicle('Civic', 'Honda');
// const corola = new Vehicle('Corola', 'Toyota');


// class Resource {
//     constructor() { }
//     whoami() {
//         console.log(this);  // will print out the current SUBCLASS object
//     }
// }

// class Widget extends Resource {
//     constructor() { super(); }
//     whoami() {
//         console.log(this);  // will print out the current Widget object
//         super.whoami();
//     }
// }

// let w = new Widget();
// w.whoami();

// const res = new Resource();
// res.whoami();


// function Student(name, age) {
//     this.name = name;
//     this.age = age;
// }

// const vaibhav = new Student('Vaibhav', 24);

// const pratik = new Student('Pratik', 25);

// Student.prototype.college = 'PICT';

// Student.prototype.sayInfo = function() {
//     console.log(this.name + ' is ' + this.age + ' years old');
//   }

// console.log(vaibhav.toString());

// pratik.sayInfo()

// vaibhav.toString();


// function createUser(name, points) {
//     let newUser = {};
//     newUser.name = name;
//     newUser.points = points;
//     newUser.increment = function () {
//         newUser.points--;
//     };
//     return newUser;
// }

// let user1 = createUser("Bob", 5);
// user1.increment();
// console.log(user1.points)


// class Calculator {

//     add(x) {
//         let num = 9;
//         return num+x+y;
//     }

//     sub(x) {
//         var y = 8;
//         let val = this.add(2);
//         return val - x;
//     }
// }

// const cal = new Calculator();

// console.log(cal.sub(2));


// let val = 7
// function createAdder() {
//     function addNumbers(a, b) {
//         let ret = a + b
//         return ret
//     }
//     return addNumbers
// }
// let adder = createAdder()
// let sum = adder(val, 8)
// console.log('example of function returning a function: ', sum)









// function createCounter() {
//     let counter = -1;
//     const myFunction = function () {
//         counter = counter + 1
//         return counter
//     }
//     return myFunction
// }
// const increment = createCounter()
// const c1 = increment()
// const c2 = increment()
// const c3 = increment()
// console.log('example increment', c1, c2, c3)

// function makeWorker() {
//     let name = "Pete";
  
//     return function() {
//       alert(name);
//     };
//   }
  
//   let name = "John";
  
//   // create a function
//   let work = makeWorker();
  
//   // call it
//   work();