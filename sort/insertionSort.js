//Time complexity: O(N^2), Time comlexity in best scenario is O(N), Space complexity: O(1)
const insertionSort = (arr)=>{
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let insertPoint = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > currentVal) {
        arr[j + 1] = arr[j];
      } else {
        insertPoint = j + 1;
        break;
      }
    }
    arr[insertPoint] = currentVal;
  }
  return arr;

};

console.log(insertionSort([12,10,9,76,4]));