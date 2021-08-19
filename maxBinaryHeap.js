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
  extractMax(){
    const end=this.value.pop();
    this.value[0]=end;
    let index=0;
    //bubble down
    let leftChild=2*index+1;
    let rightChild=2*index+2;
    while(this.value[index]<this.value[leftChild]||this.value[index]<this.value[rightChild]){
      if(this.value[leftChild]<this.value[rightChild]){
        const temp=this.value[index];
        this.value[index]=this.value[rightChild];
        this.value[rightChild]=temp;
        index=rightChild;
        leftChild=2*index+1;
        rightChild=2*index+2;
      }else {
        const temp=this.value[index];
        this.value[index]=this.value[leftChild];
        this.value[leftChild]=temp;
        index=leftChild;
        leftChild=2*index+1;
        rightChild=2*index+2;
      }
    }
    return this.value;
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
console.log(heap)
heap.extractMax();
console.log(heap)