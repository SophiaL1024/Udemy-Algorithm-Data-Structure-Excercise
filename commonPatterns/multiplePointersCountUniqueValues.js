/*count unique values
implement a function called countUniqueValues, which accepts a sorted array, and count unique values in the array. There can be negative numbers in the array, but it will always be sorted.

Examples:countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]]) //7
Bonus: You must do this with O(1)space and O(n) time.
*/

//Solution1:use set
/* const countUniqueValues = function(arr) {
  const newSet = new Set(arr);
  return newSet.size;
}; */

//Solution2: use two pointers start from begining. One is to loop the array, the other is to the point index of the largest unique value.
const countUniqueValues = (arr)=>{
  if (!arr.length) {
    return 0;
  }
  let i = 0;
  //Do not use for in over an Array if the index order is important. The index order is implementation-dependent, and array values may not be accessed in the order you expect.
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      //Cannot use arr[i++], as the value of i++ is i, while the value of i is i+1
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
console.log(countUniqueValues([1,1,1,1,1,1,2]));
console.log(countUniqueValues([]));