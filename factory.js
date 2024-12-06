function createNode(value) {
    return {
        value: value,
        next: null,
    };
}

let newNode = createNode('Hello');
console.log(newNode);

class LinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}

