// Optimized BubbleSort with noSwaps
//Time complexity: O(N^2), Space complexity: O(1)
const swap = (arr,idx1,idx2)=>{
  [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
};
const bubbleSort = (arr)=>{
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr,j,j + 1);
        noSwaps = false;
      }
    }
    //if no swap in the lastest inner loop, then the array is already sorted, break the whole loop.
    if (noSwaps) break; //if the array is nearly sorted, the time complexity of best scenario is O(n)
  }
  return arr;
};

console.log(bubbleSort([8,1,2,3,4,5,6,7]));