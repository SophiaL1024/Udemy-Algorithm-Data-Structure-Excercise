/*
Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

maxSubarraySum([1,2,5,2,8,1,5],2) // 10
maxSubarraySum([1,2,5,2,8,1,5],4) // 17
maxSubarraySum([4,2,1,6],1) // 6
maxSubarraySum([4,2,1,6,2],4) // 13
maxSubarraySum([],4) // null
*/

const maxSubarraySum = (arr,n)=>{
  if (arr.length < n) {
    return null;
  }
  let tempSum = 0;
  let maxSum = 0;
  //create the initial window
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  //push the next element and shift the first element from window, compare the new window and last window
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum + arr[i] - arr[i - n];
    maxSum = Math.max(tempSum,maxSum);
  }
  return maxSum;
};

console.log(maxSubarraySum([1,2,5,2,8,1,5],2));
console.log(maxSubarraySum([4,2,1,6,2],4));