class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }
  insert(val) {
    const node = new Node(val);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val === current.val) return undefined;
      if (val < current.val) {
        if (current.left === null) {
          current.left = node;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = node;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(val) {
    if (!this.root) return null;
    let current = this.root;
    while (current) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        return current;
      }
    }
    return undefined;
  }
  BFS() {
    let node = this.root;
    const data = [];
    const queue = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  DFSPreOrder() {
    const data = [];
    const helper = (node) => {
      data.push(node.val);
      if (node.left) helper(node.left)
      if (node.right) helper(node.right)
    }
    helper(this.root)
    return data;
  }
  DFSPostOrder(){
    const data = [];
    const helper = (node) => {
      if (node.left) helper(node.left)
      if (node.right) helper(node.right)
      data.push(node.val);
    }
    helper(this.root)
    return data; 
  }
  DFSInOrder(){
    const data = [];
    const helper = (node) => {
      if (node.left) helper(node.left)
      data.push(node.val);
      if (node.right) helper(node.right)
    }
    helper(this.root)
    return data;
  }
}

let tree = new BST();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.find(15));
console.log(tree.BFS());
console.log(tree.DFSPreOrder())
console.log(tree.DFSPostOrder())
console.log(tree.DFSInOrder())