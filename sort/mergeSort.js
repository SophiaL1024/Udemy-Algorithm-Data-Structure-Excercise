//merge helpper
const merge = (arr1,arr2)=>{
  const merged = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  //push all the left elements
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  return merged;
};
// console.log(merge([1,3,5],[2,4,6]));

//split the array into one-element sub-array(arrays having only one element are already sorted), then merge them
//Time comlexIty: O(NlogN)(time complexity of split operartion is O(logn), of merge operation is O(n)), Space complexity:O(N)
const mergeSort = (arr)=>{
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0,mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left,right);

};
console.log(mergeSort([1,3,5,2,4,6]));