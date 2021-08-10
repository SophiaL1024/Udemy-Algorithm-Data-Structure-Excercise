/*
THe function accepts a string and returns the length of the longets substring with all distinct characters.

Time complexity:O(n)
*/

const findLongestSubstring = (str)=>{
  //define an object to store characters' index
  let seen = {};
  let longest = 0;
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    //if some character already exists, move window to the right of this character
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // if this character does not exist, calculate the length of window
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
};

console.log(findLongestSubstring(''));//0
console.log(findLongestSubstring('rithmschool'));//7
console.log(findLongestSubstring('thisisawesome'));//6
console.log(findLongestSubstring('thecatinthehat'));//7
console.log(findLongestSubstring('bbbbb'));//1
console.log(findLongestSubstring('longestsubstring'));//8
console.log(findLongestSubstring('thisishowwedoit'));//6