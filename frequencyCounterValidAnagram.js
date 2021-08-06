// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
// Examples:
// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true
const validAnagram = function(str1,str2) {
  //if two strings has different length, return false
  if (str1.length !== str2.length) {
    return false;
  }
  //collect letter frequencies for each string by object
  //define two objects
  const obj1 = {};
  const obj2 = {};
  for (let letter of str1) {
    obj1[letter] = (obj1[letter] || 0) + 1;
  }
  for (let letter of str2) {
    obj2[letter] = (obj2[letter] || 0) + 1;
  }
  //if the two objects have diffrent length, return false
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  //if the same letter has diffrent frequency in the two objects, return false
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

console.log(validAnagram('texttwisttime', 'timetwisttext'));
console.log(validAnagram('awesome', 'awesom'));