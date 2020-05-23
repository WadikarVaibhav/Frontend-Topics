// // console.log(this);

// // a = 3;

// // console.log(window.a);

// // const fun = () => {
// //     return this;
// // };

// // console.log(fun());

// // class Foo {

// //     a = 20;
// //     fun = (obj) => {
// //         return obj.a;
// //     }

// //     print() {
// //         var obj = {
// //             a: 40
// //         }
// //         console.log(this.fun(this));

// //         var curried = this.fun.call(null, obj);
// //         console.log(this.fun.call(null, obj));
// //         console.log(curried());

// //         console.log(this.fun.apply(null, [obj]));
// //     }

// //     bar() {
// //         console.log(this.fun())
// //     }
// // }

// // var obj = {
// //     a: 40
// // }

// // let a = 20;

// // console.log(a);

// // console.log(this.a) // undefined

// // const fun = () => {
// //     return this.a;
// // }

// // function fun(obj) {
// //     return obj.a;
// // }

// // console.log(fun());

// // console.log(fun.call(obj));

// // console.log(fun.apply(obj));

// // const add = (c, d) => {
// //     console.log(this);
// //     return this.a + this.b + c + d;
// // }

// // const obj = {
// //     a: 1, 
// //     b: 3
// // };

// // var a = 4;
// // var b = 2;

// // console.log(add(7, 22))

// // console.log(add.call(obj, 7, 22))

// // const foo = () => {
// //     let name = 'Vaibhav';
// //     const bar = () => {
// //         alert(name);
// //     }
// //     return bar;
// // }

// // // console.log(foo());

// // let fun = foo();

// // fun();


// // const add = (a) => {
// //     return (b) => {
// //         return a + b;
// //     }
// // }

// // let num = add(10);

// // console.log(num(20));


// // let counter = () => {
// //     let val = 0;
// //     const changeBy = (num) => {
// //         val += num;
// //     }
// //     return {
// //          increment: () => {
// //             changeBy(1);
// //          },
// //          decrement: () => {
// //             changeBy(-1);
// //          },
// //          getValue: () => {
// //             return val;
// //          }
// //     }
// // }

// // let myCounter = counter();
// // let yourCounter = counter();

// // console.log(myCounter.getValue());

// // myCounter.increment();
// // myCounter.increment();

// // console.log(myCounter.getValue());

// // myCounter.decrement();

// // console.log(myCounter.getValue());




// const rootA = document.getElementById('rootA');
// const rootB = document.getElementById('rootB');

// const nodeA = document.getElementById('nodeA');
// const nodeB = document.getElementById('nodeB');

// function getPath(root, node) {
//     const path = [];

//     while (node !== root) {
//         const parent = node.parentElement;
//         const children = Array.from(parent.children);
//         const nodeIndex = children.indexOf(node);
//         path.push(nodeIndex);
//         node = parent;
//     }

//     return path;
// }

// function getNodeFromPath(node, path) {
//     const toWalk = [...path];

//     while (toWalk.length > 0) {
//         node = node.children[toWalk.pop()];
//     }

//     return node;
// }

// function getSymmetricNode(rootA, rootB, nodeA) {
//     const pathToNode = getPath(rootA, nodeA);
//     return getNodeFromPath(rootB, pathToNode);
// }


// const targetNode = getSymmetricNode(rootA, rootB, nodeA);

// console.log(nodeB === targetNode);






//console.log should be used only with serialized or immutable data
//otherwise json.stringify or dubug

player = { 
    name: 'Vaibhav',
    age: 25
};

console.log(player);
console.log(JSON.stringify(player));

player.country = 'India';