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
  shift() {
    if (this.length === 0) return undefined;
    const removed = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return removed;
  }
  unshift(val) {
    const newHead = new Node(val);
    if (this.length === 0) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    let counter = 0;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index,val) {
    let current = this.get(index);
    if (current) {
      current.val = val;
      return current;
    }
    return false;
  }
  insert(index,val) {
    if (index < 0 || index >= this.length) return false;
    const newNode = new Node(val);
    if (index === 0) {
      this.unshift(val);
    } else if (index === this.length) {
      this.push(val);
    } else {
      let prepNode = this.get(index - 1);
      newNode.next = prepNode.next;
      prepNode.next = newNode;
      this.length++;
      return newNode;
    }
  }
  remove(index) {
    if (index < 0 || index >= this.length) return false;

    if (index === 0) {
      this.shift();
    } else if (index === this.length) {
      this.pop();
    } else {
      const prepNode = this.get(index - 1);
      const removeNode = prepNode.next;
      prepNode.next = removeNode.next;
      removeNode.next = null;
      this.length--;
      return removeNode;
    }
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
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
console.log(list.shift());
console.log(list);
console.log(list.unshift(6));
console.log(list.get(2));
console.log(list.set(2,0));
console.log(list.insert(2,100));
console.log(list.remove(2));