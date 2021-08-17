class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    const node = new Node(val);
    if (this.size === 0) {
      this.first = node;
      this.last = node;
    } else {
      const temp = this.first;
      this.first = node;
      node.next = temp;
    }
    this.size++;
    return this.first;
  }
  pop() {
    if (this.size === 0) return null;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      const temp = this.first;
      this.first = temp.next;
      temp.next = null;
    }
    this.size--;
    return this.first;
  }
}

const stack = new Stack();
console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));
console.log(stack.pop());