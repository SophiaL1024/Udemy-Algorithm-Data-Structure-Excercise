//Time complexity: O(N^2), Time comlexity in best scenario is still O(N^2), Space complexity: O(1)
const swap = (arr,idx1,idx2)=>{
  [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
};
const selectionSort = (arr)=>{
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      swap(arr,i,minIndex);
    }
  }
  return arr;
};

console.log(selectionSort([2,1,9,76,4]));