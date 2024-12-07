function CreateNode(value) {
    return {
        value: value,
        next: null,
    };
}

let newNode = CreateNode('Hello');
console.log(newNode);

class LinkedList {
    constructor() {
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
    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
    remove() {
        if (this.tail) {
            this.length--;
            const tailNode = this.tail;

            // search for the node before tail
            let currentNode = this.head;
            // the while loop stops when the node next
            while (currentNode.next != tailNode) {
                currentNode = currentNode.next;
            }

            const beforeTail = currentNode;
            this.tail = beforeTail;
            this.tail.next = null;

            return tailNode;
        }
        return undefined;
    }
    insertHead(value) {
        this.length++;
        let newNode = CreateNode(value);

        if (this.head) {
            newNode.next = this.head;
            this.head = newNode;
            return newNode;
        }

        this.head = this.tail = newNode;
        return newNode;
    }
    removeHead() {
        if (this.head) {
            this.length--;
            const removedNode = this.head;
            this.head = this.head.next;
            return removedNode;
        }
        return undefined;
    }
    insertIndex(value, index) {
        if (index >= this.length) {
            throw new Error('Insert index out of bounds');
        }
        if (index === 0) {
            return this.insertHead(value);
        }

        let previousNode = null;
        let currentNode = this.head;

        // Iterate until we reach the node before the desired index
        for (let i = 0; i < index; i++) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        // Create the new node
        const newNode = CreateNode(value);

        // Insert the new node between previous and current
        if (previousNode) {
            newNode.next = currentNode;
            previousNode.next = newNode;
        } else { // Inserting at the end (previousNode is null)
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return newNode;
    }
    removeIndex(index) {
        if (index >= this.length) {
            throw new Error("Remove index out of bounds");
        }
        if (index === 0) {
            return this.removeHead();
        }

        let previousNode = null;
        let currentNode = this.head;

        // Iterate until we reach the node before the desired index
        for (let i = 0; i < index; i++) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        // Handle removing the last element (previousNode will be null)
        if (previousNode === null) {
            this.head = currentNode.next; // Update head if removing the last element
            this.tail = null; // Update tail if removing the last element
        } else {
            previousNode.next = currentNode.next;
        }

        this.length--;
        return currentNode;
    }
}

const linkedList = new LinkedList();

linkedList.insert(7);
linkedList.insert(8);
linkedList.insert(9);
linkedList.insert(10);
linkedList.removeIndex(2); // remove 9
console.log(linkedList.length); // 3
linkedList.print(); // 7 8 10

