function CreateNode(value) {
    return {
        value: value,
        next: null,
    };
}

let newNode = CreateNode('Hello');
console.log(newNode);

class LinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    insert(value) {
        this.length++;
        let newNode = CreateNode(value);

        if (this.tail) {
            this.tail.next = newNode;
            this.tail = newNode;
            return newNode;
        }

        this.head = this.tail = newNode;
        return newNode;
    }
}

