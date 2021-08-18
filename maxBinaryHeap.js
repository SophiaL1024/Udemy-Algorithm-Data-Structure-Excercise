class MaxBinaryHeap {
  constructor() {
    this.value = [];
  }
  //push the value to the end of the array,then bubble up
  insert(val) {
    this.value.push(val);
    let valIndex = this.value.length - 1
    let parentIndex = Math.floor((valIndex - 1) / 2);
    while (parentIndex >= 0 && this.value[parentIndex] < val) {
      //swap
      [this.value[parentIndex], this.value[valIndex]] = [this.value[valIndex], this.value[parentIndex]];
      valIndex = parentIndex;
      parentIndex = Math.floor((valIndex - 1) / 2);
    }
    return this.value
  }
}
const heap=new MaxBinaryHeap();
heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
heap.insert(55)
heap.insert(45)
console.log(heap)