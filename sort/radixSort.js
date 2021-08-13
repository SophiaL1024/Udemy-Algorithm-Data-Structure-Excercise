const getDigit = (num,i)=>{
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};
// console.log(getDigit(4536,0));

const digitCount = (num)=>{
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};
// console.log(digitCount(4536));

const mostDigits = (arr)=>{
  let maxDigit = 0;
  for (let i = 0; i < arr.length; i++) {
    maxDigit = Math.max(maxDigit,digitCount(arr[i]));
  }
  return maxDigit;
};
// console.log(mostDigits([4,22,4568,963]));

const radixSort = (arr)=>{
  const mostDigit = mostDigits(arr);
  for (let k = 0; k <= mostDigit; k++) {
    //We can't use Array.fill([]) here, because the fill() method changes all elements in an array to a static value. And when the static value is an object value(like an empty array here), it'is pointing to the same reference. So one element change will reflect on all the elements.
    //Array.from() creates a new, shallow-copied Array instance from an array-like or iterable object(objects with a length property and indexed elements).
    const digitBuckets = Array.from({length: 10}, () => []);

    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i],k);
  
      digitBuckets[digit].push(arr[i]);
    }
    //Only NodeJS version 11 and above support array.flat() method.
    arr = [].concat(...digitBuckets);
  }
  return arr;
};

console.log(radixSort([23,345,5467,12,2345,9852]));