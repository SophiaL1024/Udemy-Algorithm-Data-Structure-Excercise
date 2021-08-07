/*
Function areThereDuplicates accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples: areThereDuplicates(1,2,3) //false
areThereDuplicates(1,2,2) //true
areThereDuplicates('a','b','c','a') //true

Restrictions:Time-O(n) Space-O(n)
Bonus: Time-O(nlogn) Space-O(1)
*/

//Solution1:use objects to count frequency
//Use rest parameter to pass in an indefinete number of parameters
//Time-O(n) Space-O(n)
const areThereDuplicates1 = (...args)=>{

  const frequency = {};

  //Can't use forEach method. "There is no way to stop or break a forEach() loop other than by throwing an exception. If you need such behavior, the forEach() method is the wrong tool."-- MDN
  for (let e of args) {
    if (!frequency[e]) {
      frequency[e] = true;
    } else {
      return true;
    }
  }
  return false;
};

console.log(areThereDuplicates1(1,2,3));
console.log(areThereDuplicates1(1,2,2));
console.log(areThereDuplicates1('a','b','c','a'));
console.log('--------------------------');
//Solution2: use Set
//Time-O(n) Space-O(n)
const areThereDuplicates2 = (...args)=>{
  const set = new Set(args);
  if (set.size !== args.length) {
    return true;
  }
  return false;
};

console.log(areThereDuplicates2(1,2,3));
console.log(areThereDuplicates2(1,2,2));
console.log(areThereDuplicates2('a','b','c','a'));
console.log('--------------------------');

//Solution3: Sort the arguments array first
// Time-O(nlogn) Space-O(n)
const areThereDuplicates3 = (...args)=>{
  args.sort();
  for (let i = 0; i < args.length - 1; i++) {
    if (args[i] === args[i + 1]) {
      return true;
    }
  }
  return false;
};

console.log(areThereDuplicates3(1,2,3));
console.log(areThereDuplicates3(1,2,2));
console.log(areThereDuplicates3('a','b','c','a'));