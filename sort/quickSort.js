//swap helpper
const swap = (arr,idx1,idx2)=>{
  [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
};

//Pivot helper. Pick the first element as pivot. The helper should do this in place, that is, it should not create a new array
const pivot = (arr,start = 0,end = arr.length - 1)=>{
  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      swapIndex++;
      swap(arr,i,swapIndex);
    }
  }

  swap(arr,start,swapIndex);

  return swapIndex;
};
// console.log(pivot([ 5, 2, 1, 8, 4, 7, 6, 3 ]));
//Time complexity: O(NlogN) (in worst scenario, if the array is alraedy sorted, and pivot is picked at a fixed spot, the time complexity is O(N^2). So it is better to pick pivot randomly in each recursion), space complexity: O(logN)
const quickSort = (arr,start = 0,end = arr.length - 1)=>{
  if (start < end) {
    let pivotIndex = pivot(arr,start,end);
    //left
    quickSort(arr,start,pivotIndex - 1);
    //right
    quickSort(arr,pivotIndex + 1,end);
  }
  return arr;

};

console.log(quickSort([ 5, 2, 1, 8, 4, 7, 6, 3 ]));