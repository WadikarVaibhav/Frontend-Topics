const nums = [[1,2], [14,24], [13,23], [12,22], [11,21]];

const map = new Map(nums);

console.log(map);

for (let [key, val] of map) {
    console.log(key+"=>"+val);
}