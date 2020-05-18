// console.log(dosomething)
// dosomething();

// function dosomething() {
//     console.log('Hello');
// }

// console.log(something);
// something();

// const something = () => {
//     console.log('World');
// }

// var b = 20;

// function power(a) {
//     return function(b) {
//         return  Math.pow(b, a) ;
//     }
// }

// const square = power(2);
// const cube = power(3);

// console.log(  square(3) );
// console.log(  cube(4) );


// const counter = () => {
    
//     let count = 0;

//     changeBy = val => {
//         count += val;
//     }

//     return {
//         increment: () => {
//             changeBy(1);
//         },
//         decrement: () => {
//             changeBy(-1);
//         },
//         display: () => {
//             console.log(count)
//         }
//     }
// }

// console.log(this);

// const manishaCounter = counter();

// manishaCounter.increment();
// manishaCounter.display();
// manishaCounter.increment();
// manishaCounter.display();

// const amolCounter = counter();

// amolCounter.increment();
// amolCounter.display();



// var a = 10;

// var obj = {
//     a: 100
// }

// const add = () => {
//     return 90 + this.a;
// }

// var x = 90;

// const module = {
//     x: 42,
//     getX: function() {
//         console.log(this);
//       return x;
//     }
//   }
  
//   const unboundGetX = module.getX.bind(module);
//   console.log(unboundGetX());

// var printsToBeExecuted = [];

// for (let i = 0; i < 3; i++) {
//   printsToBeExecuted.push(() => console.log(i));
// }

// printsToBeExecuted.forEach(f => f()); 

// var name = 'Vaibhav';
// var a = 16;
// var age = [12,13,14,15];

// for (var i=0; i<4; i++) {
//   (() => {
//     var a = age[i];
//     console.log(name+" is was once "+a);
//   })();
// }

// console.log(name+" is was once "+a);


class person {
    education = (degree) => {
        console.log(this);
        console.log(`${this} has studies ${degree}`);
    }
};

const vaibhav = new person();
vaibhav.education('MS');
