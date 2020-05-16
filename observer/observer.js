/*

1. emitter object
2. subscribe event with a callback
3. emit that event
4. unsubscribe that

*/

// class Emitter {
//     constructor() {
//         this.events = {};
//     }

//     subscribe(event, callback) {
//         this.events[event] = callback
//         // this.events = Object.assign(this.events, {event: callback});
//     }

//     unsubscribe(event) {
//         // this.events = Object.keys(this.events).reduce((events, currentEvent) => {
//         //     if (currentEvent !== event) events[currentEvent] = this.events[currentEvent];
//         //     return events;
//         // }, {});
//         delete this.events[event];
//     }

//     emit(event, param) {
//         if (this.events[event]) {
//             this.events[event](param);
//         }
//     }
// };

// const emitter = new Emitter();

// const showNum = (num) => {
//     console.log(num);
// };

// const showSquare = (num) => {
//     console.log(Math.pow(num, 2));
// };

// const showCube = (num) => {
//     console.log(Math.pow(num, 3));
// };

// emitter.subscribe('display-num', showNum);

// emitter.subscribe('display-square', showSquare);

// console.log(emitter.events);

// emitter.emit('display-num', 2);

// emitter.emit('display-square', 2);

// emitter.unsubscribe('display-square');

// console.log(emitter.events);

// emitter.emit('display-num', 2);

// emitter.emit('display-square', 2);




/*
1. subscribe an event
2. unsubscribe an event
3. emit an ecent
4.. All events
*/

// const showSqr = (num) => {
//     console.log(Math.pow(num, 2));
// };

// const showCube = (num) => {
//     console.log(Math.pow(num, 3));
// };

// class Emitter {
//     constructor() {
//         this.events = {};
//     }

//     subscribe(event, callback) {
//         if (!this.events[event]) {
//             this.events[event] = callback;
//         }
//     }

//     unsubscribe(event) {
//         if (this.events[event]) delete this.events[event];
//     }

//     emit(event, params) {
//         if (this.events[event]) this.events[event](params);
//     }
// }

// const emitter = new Emitter();

// emitter.subscribe('show-square', showSqr);

// emitter.subscribe('show-cube', showCube);

// emitter.emit('show-square', 2);


class Emitter {
    constructor() {
        this.events = {};
    }

    subscribe(event, callback) {
        if (!this.events.event) {
            this.events[event] = callback;
        }
    }

    unsubscribe(event) {
        if (this.events[event]) {
            delete this.events[event];
        }
    }

    emit(event, params) {
        if (this.events[event]) {
            this.events[event](params);
        } else {
            console.log(event + ' does not exist');
        }
    }
}

const showSquare = num => {
    console.log(Math.pow(num, 2));
}

const showCube = num => {
    console.log(Math.pow(num, 3));
}

const emitter = new Emitter();

emitter.subscribe('show-square', showSquare);
emitter.subscribe('show-cube', showCube);
emitter.emit('show-square', 2);
emitter.unsubscribe('show-square');
emitter.emit('show-square', 5);
emitter.emit('show-cube', 2);
emitter.unsubscribe('show-cube');
emitter.emit('show-cube', 5);
