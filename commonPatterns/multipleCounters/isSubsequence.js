/*
Takes in two strings and checks whether the characters in the first string form a subsequence of characters in the second string. In the other words, the function should check whether the characters in the first string appear somewhere in the second string, without their oeder changing.

Examples: isSubsequence('hello','hello world'); //true
isSubsequence('sing','sting'); //true
isSubsequence('abc,'abracadabra'); //true
isSubsequence('abc,'acb'); //false

Your solution must have at least the following complexities:
Time: O(N+M)
Space: O(1)

*/

const isSubsequence = (str1,str2)=>{
  if (str1 === str2) return true;
  let p1 = 0;
  let p2 = 2;

  while (p2 <= str1.length) {
    console.log(str1.slice(p1,p2));
    if (str2.includes(str1.slice(p1,p2))) {
      return true;
    }
    p1++;
    p2++;
  }
  return false;
  
};

console.log(isSubsequence('hello','hello world'));//true
console.log(isSubsequence('sing','sting'));//true
console.log(isSubsequence('abc','abracadabra'));//true
console.log(isSubsequence('yo','yo'));//true
console.log(isSubsequence('aaa Madam,' ,"I'm Adam"));//true
console.log(isSubsequence('abc','acb'));//false