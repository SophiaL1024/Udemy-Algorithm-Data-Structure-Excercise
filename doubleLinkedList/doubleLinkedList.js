class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return undefined;
    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
    }
    this.length--;
    return this;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;

  }
  shift() {
    if (this.length === 0) return undefined;
    const shiftNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftNode.next;
      this.head.prev = null;
    }
    this.length--;
    return this;
  }
  get(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index < this.length / 2) {
      let current = this.head;
      let count = 0;
      while (count !== index) {
        current = current.next;
        count++;
      }
      return current;
    }
    let count = this.length - 1;
    let current = this.tail;
    while (count !== index) {
      current = current.prev;
      count--;
    }
    return current;
  }
  set(index,val) {
    const current = this.get(index);
    if (current) {
      current.val = val;
      return current;
    }
    return 'Not found';
  }
  insert(index,val) {
    if (index < 0 || index > this.length) return 'invalid index';
    if (index === 0) return this.unshift(val);
    if (index === this.length - 1) return this.push(val);
    const newNode = new Node(val);
    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;

    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return newNode;
  }
  remove(index) {
    if (index < 0 || index > this.length) return 'invalid index';
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const removedNode = this.get(index);
    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;
    removedNode.prev = null;
    removedNode.next = null;
    this.length--;
    return this;
  }
}

const dLL = new DoubleLinkedList;
dLL.push(1);
dLL.push(2);
dLL.push(3);
dLL.push(4);
console.log(dLL.push(5));
console.log(dLL.pop());
console.log(dLL.unshift(0));
console.log(dLL.shift(0));
console.log(dLL.get(2));
console.log(dLL.set(2,300));
console.log(dLL.insert(2,123));
console.log(dLL.remove(4));

