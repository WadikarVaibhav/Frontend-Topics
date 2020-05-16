// let inputText = document.getElementById('input-value');
// inputText.placeholder = 'Name';

// let submitButton = document.getElementById('submit-button');
// submitButton.value = 'Send';

// let items = document.getElementsByClassName('group-item');
// //items[0].style.background = 'grey';

// let lastItem = document.querySelector('.group-item:last-child');
// //lastItem.style.background = 'red';

// let secondItem = document.querySelector('.group-item:nth-child(2)');
// //secondItem.style.background = 'yellow';

// let evenItems = document.querySelectorAll('.group-item:nth-child(even)');
// let oddItems = document.querySelectorAll('.group-item:nth-child(odd)');

// Object.values(evenItems).map(evenItem => evenItem.style.background = 'yellow');

// Object.values(oddItems).map(oddItem => oddItem.style.background = 'red');

// Object.values(items).map(item => {
//     item.style.width = '50%';
//     item.style.border = 'solid 1px black';
//     item.style.height = '50%';
// });

// let listItem = document.createElement('li');

// listItem.className = 'group-item';
// listItem.textContent = 'Item 10';

// console.log(listItem);

// let group = document.querySelector('.groups');

// let first = document.querySelector('.group-item');

// group.insertBefore(listItem, first.nextSibling);

// showAlert = () => {
//     alert('huh')
// }

// let button = document.getElementById('event-button');
// button.addEventListener('mouseup', (e) => {
//     console.log(e.target);
// });


// let input = document.getElementById('input-value');
// input.addEventListener('keydown', (e) => {
//     console.log(e.target.value);
// });

// input.addEventListener('focus', () => {});

// input.addEventListener('blur', () => {});


// const rootA = document.getElementById('rootA');
// const rootB = document.getElementById('rootB');
// const reference = document.getElementById('nodeA');

// const isNodePresent = (rootA, rootB, reference) => {
//     const pathFromRootA = getReferenceNodePath(rootA, reference);
//     const target = getTargetNode(rootB, pathFromRootA);
//     return target === reference;
// }

// const getReferenceNodePath = (rootA, reference) => {
//     const path = [];

//     while (reference != rootA) {
//         const parent = reference.parentNode;
//         const children = [...parent.children];
//         const index = children.indexOf(reference);
//         path.push(index);
//         reference = parent;
//     }

//     return path;
// };

// const getTargetNode = (rootB, path) => {
//     while (path.length != 0) {
//         const children = [...rootB.children];
//         rootB = children[path.pop()];
//     }
//     return rootB;
// };

// console.log(isNodePresent(rootA, rootB, reference));


// const firstHeading = document.querySelector('.sensations');

// const findNextHeader = (firstHeading) => {
//     const parentArticle = firstHeading.parentNode;
//     const newHeaderParent = parentArticle.nextElementSibling;
//     const children = newHeaderParent.children;
//     for (node of children) {
//         if (node.nodeName === 'H2') return node.innerText;
//     }
//     return 'Not Found';
// }

// console.log(findNextHeader(firstHeading));


const rootA = document.getElementById('rootA');
const rootB = document.getElementById('rootB');
const referenceNode = document.getElementById('nodeA');

const isNodePresent = (rootA, rootB, referenceNode) => {
    const referenceNodePath = getReferenceNodePath(rootA, referenceNode);
    const targetNode = getTargetNode(rootB, referenceNodePath);
    return referenceNode.nodeName === targetNode.nodeName;
}

const getReferenceNodePath = (rootA, referenceNode) => {
    const path = [];
    while (referenceNode !== rootA) {
        const parent = referenceNode.parentNode;
        const children = [...parent.children];
        const index = children.indexOf(referenceNode);
        path.push(index);
        referenceNode = parent;
    }
    return path;
}

const getTargetNode = (rootB, referenceNodePath) => {
    while (referenceNodePath.length != 0) {
        const children = [...rootB.children];
        const index = referenceNodePath.pop();
        rootB = children[index];
    }
    return rootB;
}

console.log(isNodePresent(rootA, rootB, referenceNode));