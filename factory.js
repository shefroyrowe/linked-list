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
}

const linkedList = new LinkedList();

linkedList.insert(7);
linkedList.insert(true);
linkedList.insert(20);
linkedList.print() // 7 true 20

