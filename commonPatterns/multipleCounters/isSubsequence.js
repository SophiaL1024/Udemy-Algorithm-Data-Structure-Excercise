/*
Takes in two strings and checks whether the characters in the first string form a subsequence of characters in the second string. In the other words, the function should check whether ALL the characters in the first string appear somewhere in the second string, without their order changing.

Examples: isSubsequence('hello','hello world'); //true
isSubsequence('sing','sting'); //true
isSubsequence('abc,'abracadabra'); //true
isSubsequence('abc,'acb'); //false

Your solution must have at least the following complexities:
Time: O(N+M)
Space: O(1)

*/



const isSubsequence = (str1, str2)=> {
  let i = 0;
  let j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    
    j++;
  }
  return false;
};

// const isSubsequence = (str1, str2)=> {
//   if (str1.length === 0) return true;
//   if (str2.length === 0) return false;
//   if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
//   return isSubsequence(str1, str2.slice(1));
// };

console.log(isSubsequence('hello','hello world'));//true
console.log(isSubsequence('sing','sting'));//true
console.log(isSubsequence('abc','abracadabra'));//true
console.log(isSubsequence('yo','yo'));//true
console.log(isSubsequence('aaa' ,"Madam, I'm Adam"));//true
console.log(isSubsequence('abc','acb'));//false