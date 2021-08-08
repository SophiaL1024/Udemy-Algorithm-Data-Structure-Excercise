/*
Function areThereDuplicates accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples: areThereDuplicates(1,2,3) //false
areThereDuplicates(1,2,2) //true
areThereDuplicates('a','b','c','a') //true

Restrictions:Time-O(n) Space-O(n)
Bonus: Time-O(nlogn) Space-O(1)
*/

const areThereDuplicates = (...args)=>{
  // sort args
  args.sort();
  let p1 = 0;
  let p2 = 1;
  while (p2 < args.length) {
    if (args[p1] !== args[p2]) {
      p2++;
      p1++;
    }
    return true;
  }
  return false;
};

console.log(areThereDuplicates(1,2,3));
console.log(areThereDuplicates(1,2,2));
console.log(areThereDuplicates('a','b','c','a'));