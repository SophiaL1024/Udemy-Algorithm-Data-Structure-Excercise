/*
Write a recursive function called capitalizeWords.Given an array of words, return a new array containing each word capitalized.
*/

const capitalizeWords = (array)=>{
  //base case
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  //assign res to the first element of the original array
  const res = capitalizeWords(array.slice(0,-1));
  //when pop out the call stack , push into the last element
  res.push(array.slice(array.length - 1)[0].toUpperCase());

  return res;
};

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']