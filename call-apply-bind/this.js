// let vaibhav = {
//     firstname: 'Vaibhav',
//     lastname: 'Wadikar'
// }

// function showName(country) {
//     return 'Welcome to ' + country +' ' +this.firstname +' '+this.lastname
// }

// let args = ['India'];

// console.log(showName.apply(vaibhav, args));

// let names = ['vaibhav', 'alex', 'jam'];
// for (var i = 0 ; i <3; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }.bind(this, i), 1000,);
// }

// function dosomething() {
//     console.log(this);
// }

// let my_fun =  {
//     name: 'Vaibhav'
// }

// const me = dosomething.bind(my_fun);

// me()

// dosomething = me

// dosomething()

// class Coffee {
//     constructor(strong) {
//         this.strong = strong;
//     }

//     info() {
//         const info = this.strong ? '' : 'not';
//         console.log('coffee is ' + info + ' strong');
//     }
// }

// const strongCoffee = new Coffee(true);

// const normalCoffee = new Coffee(false);

// strongCoffee.info();

// normalCoffee.info();


// const coffee = {
//     strong: true,
//     amount: 120,
//     drink: () => {
//         setTimeout(function() {
//             this.amount -= 10;
//         }, 100);
//         return this.amount
//     }
// }

// console.log(coffee.drink());

// class Computer {
//     constructor(type) {
//         this.type = type;
//         this.len = 0;
//     }

//     run() {
//         setTimeout(() => {
//             console.log(this.type)
//         }, 500);
//     }

//     show() {
//         fetch('https://2api.github.com/users/hadley/orgs')
//             .then(function(response){
//                 return response.json();
//             })
//             .then(function(data) {
//                 this.len = data.length;
//             }.bind(this))
//             .catch(function(err) {
//                 console.log(this.len+' '+this.type);
//             }.bind(this));
//     }
// }

// const computer = new Computer('Windows');
// computer.show();
// console.log(computer)


// $.ajax({
//     url: '',
//     datatype: 'json',
//     data: {
//       postId: postId,
//       parentId: parentId
//     },
//     cache: false,
//     error: function() {
//       alert('Error!')
//     },
//     success: function(response) {
//       this.setState ({
//         comments: response
//       })
//     }.bind(this)
//   })


// const generateObj = (name, age) => {
//     return {
//         name,
//         age
//     }
// }

// console.log(generateObj('Vaibhav', 25));

//Array destructuring
// const data = [1,2,3];

// const [a, b, c = 4] = data;

// console.log(a , b, c);


//Object destructuring
// const person = {name: 'Vaibhav', age: 25};

// const {name, age} = person;

// console.log(name, age);


//Nested destructuring
// const data = {arr: [1,2,3]}

// const {arr:[,b]}  = data;

// console.log(b);

// const response = {
//     data: {
//         date: '08 Mar 1995',
//         age: 25,
//         degrees: ['B.E', 'M.S'],
//         parents: {
//             mother: {
//                 //name: 'Jyoti',
//                 age: 48
//             },
//             father: {
//                 name: 'Vikas',
//                 age: 58
//             }
//         }
//     }
// }

// const {
//     data: {
//         parents: {
//             mother: {
//                 name: motherName =  'Jyotii'
//             }
//         }
// }} = response;

// console.log(motherName);

// const courses = [

//     {
//         title: 'Linear Algebra II',
//         description: 'Advanced linear algebra.',
//         texts: [{
//             author: 'James Smith',
//             price: 120,
//             ISBN: '912-6-44-578441-1'
//         }]
//     },
//     {
//         title: 'Linear Algebra II',
//         description: 'Advanced linear algebra.',
//         texts: [{
//             author: 'James Smith',
//             price: 120,
//             ISBN: '912-6-44-578441-2'
//         }]
//     },
//     {
//         title: 'Linear Algebra II',
//         description: 'Advanced linear algebra.',
//         texts: [{
//             author: 'James Smith',
//             price: 120,
//             ISBN: '912-6-44-578441-3'
//         }]
//     }
// ]

// const [{
//     texts: [
//         {
//             ISBN
//         }
//     ]
// }] = courses;

// console.log(ISBN);
