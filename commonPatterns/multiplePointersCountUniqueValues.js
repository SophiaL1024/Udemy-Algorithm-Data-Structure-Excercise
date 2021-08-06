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

//Solution2: use two pointers start from begining
const countUniqueValues = (arr)=>{
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;

};
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));