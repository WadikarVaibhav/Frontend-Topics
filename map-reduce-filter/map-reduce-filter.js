// const hindiSongs = [
//     {id: 1, name: 'Hum Tum', singer: 'Arijit', duration: 4},
//     {id: 2, name: 'Tum Hum', singer: 'Lata', duration: 3},
//     {id: 3, name: 'Raja Raja', singer: 'Asha', duration: 6},
//     {id: 4, name: 'Band Baja', singer: 'Sonu', duration: 2},
//     {id: 5, name: 'Sathiya', singer: 'Neha', duration: 3},
//     {id: 6, name: 'Bahngda', singer: 'Mohit', duration: 4},
// ];

// const englishSongs = [
//     {id: 1, name: 'Perfect', singer: 'Ed Sheeran', duration: 5},
//     {id: 2, name: 'Sorry', singer: 'Justin', duration: 5},
//     {id: 3, name: 'Havana', singer: 'Camila', duration: 7},
//     {id: 4, name: 'Senorita', singer: 'Shawn', duration: 5},
//     {id: 5, name: 'Attention', singer: 'Charlie', duration: 8},
//     {id: 6, name: 'Girls like you', singer: 'Adam', duration: 7},
// ];

// const songs = [hindiSongs, englishSongs].reduce((acc, current) => {
//     return acc.concat(current);
// }, []).map(song => {
//     return {...song, time: song.duration * 60}
// }).filter(song => song.time > 200);

// console.log(songs);

// function flattenIterative(arr) {
//     const flatArray = [];
//     let original = [...arr];
//     while (original.length > 0) {
//         const current = original.shift();
//         if (Array.isArray(current)) {
//             original = current.concat(original);
//         } else {
//             flatArray.push(current);
//         }
//     }
//     return flatArray;
// }

// flattenIterative([1,2,[3,4], 5,6,7,[[8,9,10], 11]]);

// const flatNums = [];

// const flatten = (nums) => {
//     if (nums.length === 0)  return flatNums;
//     const first = nums.shift();
//     if (Array.isArray(first)) {
//         nums = first.concat(nums);
//     } else {
//         flatNums.push(first);
//     }
//     return flatten(nums);
// }

// console.log(flatten([1,2,3,[4,5],6,7,[[7,8],9], 10]));

// const first = [
//     {car: 'Honda', owner: 'Vaibhav'},
//     {car: 'Corolla', owner: 'Amol'},
//     {car: 'Civic', owner: 'Manisha'},
//     {car: 'Camry', owner: 'Saumil'}
// ];

// const second = [
//     {car: 'Civic', owner: 'Manisha'},
//     {car: 'Camry', owner: 'Saumil'},
//     {car: 'Corolla', owner: 'Yesha'},
// ];

// const carOwners = new Map();

// for (carOwner of second) {
//     carOwners.set(carOwner.car, carOwner.owner);
// }

// const filteredCarDetails = first.filter(carOwner => {
//     if (carOwners.has(carOwner.car) && carOwners.get(carOwner.car) === carOwner.owner)    return false;
//     return true;
// });

// console.log(filteredCarDetails);

// for (let i=0; i<first.length; i++) {
//     const key = first[i].car;
//     const val = first[i].owner;
//     if (carOwners.has(key) && carOwners.get(key) === val) {
//         first.splice(i--, 1);
//     }
// }

// console.log(first);

// nums = [25, 21, 12, 34, 44, 87, 9];
// indices = [4, 2, 6, 0, 5, 3, 1];

// const swap = (nums, num, currentIndex, newIndex) => {
//     const temp = nums[newIndex];
//     nums[newIndex] = num;
//     nums[currentIndex] = temp;
// }

// const changeIndex = (nums, indices) => {
//     for (let i=0; i<nums.length; i++) {
//         swap(nums, nums[i], i, indices[i]);
//         swap(indices, indices[i], i, indices[i]);
//     }
//     return nums;
// }

// console.log(changeIndex(nums, indices));

