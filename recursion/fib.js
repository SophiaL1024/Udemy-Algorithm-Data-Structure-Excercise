/*
Write a function called fib which accepts a number and return s the nth number in the Fibonacci sequence.Recall the Fibonacci sequence is the sequence of the whole numbers 1,1,2,3,5,8,...which starts with 1 and 1. and where every number thereafter is equal to the sum of the previous two numbers.
*/
const fib = (num)=>{
  if (num === 1 || num === 2) return 1;
  return fib(num - 1) + fib(num - 2);

};
console.log(fib(4));// 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465