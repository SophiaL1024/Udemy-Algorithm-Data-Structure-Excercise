class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;

  }

  traverse() {
    let current = this.head;
    while (current) {
      current = current.next;
    }
  }
  pop() {
    if (this.length === 0) return undefined;
    let current = this.head;
    let newTail = current;
    // if current is the last node, get out of the loop, then the newTail is the one before the last node.
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
}

const list = new SingleLinkedList;
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
console.log(list);
console.log(list.pop());
console.log(list);