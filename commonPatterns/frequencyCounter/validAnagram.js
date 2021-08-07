// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
// Examples:
// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true

//solution1: define two objects of letter frequency and compare the two objects
const validAnagram1 = function(str1,str2) {
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


//solution2: compare letter frequency in the second string loop
const validAnagram2 = function(str1,str2) {
  //if two strings has different length, return false
  if (str1.length !== str2.length) {
    return false;
  }
  //collect letter frequencies of first string by object
  const obj1 = {};

  for (let letter of str1) {
    obj1[letter] = (obj1[letter] || 0) + 1;
  }

  //loop the 2nd string, check if letter of str2 has the same frequency as str1
  for (let letter of str2) {
    if (!obj1[letter]) {
      return false;
    } else {
      obj1[letter]--;
    }
  }
  return true;
};

console.log(validAnagram1('texttwisttime', 'timetwisttext'));
console.log(validAnagram1('awesome', 'awesom'));
console.log(validAnagram2('texttwisttime', 'timetwisttext'));
console.log(validAnagram2('awesome', 'awesom'));