/*
WRite a recursive function called flatten which acceots an arrays and returns a new array with all values flattened.
*/

const flatten = (arr)=>{
  let result = [];
  //iterate inside recursion
  arr.forEach(element=>{
    if (Array.isArray(element)) {
      result = result.concat(flatten(element));
    } else {
      result.push(element);
    }
  });
  return result;
};

console.log(flatten([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]