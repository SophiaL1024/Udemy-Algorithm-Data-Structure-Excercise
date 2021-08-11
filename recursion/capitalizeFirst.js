/*
Write a recursive function called capitalizeFirst. Given an array of strings , capitalize the first letter of each string in the array.
*/
//  Use recusion to iterate array:
const capitalizeFirst = (array)=>{
  //base case
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].slice(1)];
  }
  //assign res to the first element of the original array
  const res = capitalizeFirst(array.slice(0,-1));
  //when pop out the call stack , push into the last element
  const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length - 1)[0].slice(1);
  res.push(string);

  return res;
};

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']