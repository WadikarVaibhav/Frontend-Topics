const isMomHappy = false;

const willIGetPhone = new Promise((resolve, reject) => {
    if (isMomHappy) {
        const phone = {
            brand: 'Apple',
            model: 11
        };
        resolve(phone);
    } else {
        const reason = new Error('You got less marks in exam');
        reject(reason);
    }
});

// const askMom = () => {
//     willIGetPhone
//         .then((gift) => {
//             console.log(gift);
//         })
//         .then((phone) => {
//             console.log('See my new phone');
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// }

// askMom();

// const response = fetch('http://time.jsontest.com');

// const div = document.querySelector('#data-grid');
// const ul = document.createElement('ul');

// div.textContent = 'Loading...';

// response
//     .then (resp => resp.json())
//     .then(data => {
//         div.textContent = 'Names'
//         for (const key of Object.keys(data)) {
//             const li = document.createElement('li');
//             li.textContent = key +': ' +data[key];
//             ul.appendChild(li);
//         }
//         div.appendChild(ul);
//     })
//     .catch(err => {
//         console.log('Failed');
//     })


// console.log("1");
// setTimeout(function(){console.log("2");},3000);
// console.log("3");
// setTimeout(function(){console.log("4");},1000);
