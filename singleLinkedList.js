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
}

const list = new SingleLinkedList;
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
console.log(list);