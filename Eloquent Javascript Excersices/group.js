class Group {
    constructor() {
        this.elements = [];
    }

    add(elem) {
        if (!this.has(elem))
            this.elements.push(elem);
        else
            console.log('Already Present');
    }

    delete(elem) {
        this.elements = this.elements.filter((element) => element !== elem);
    }

    has(elem) {
        return this.elements.indexOf(elem) !== -1;
    }

    static from(values) {
        const nums = new Group();
        for (const val of values)   nums.add(val);
        return nums;
    }
}

const nums = Group.from([10, 20]);

nums.add(10);
nums.add(20);
nums.add(30);
nums.add(40);
nums.add(50);

console.log(nums.has(30));

nums.delete(30);

console.log(nums.has(30));