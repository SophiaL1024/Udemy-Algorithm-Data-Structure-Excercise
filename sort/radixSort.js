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
    const newArray = Array(10).fill([]);

    for (let i = 0; i < arr.length; i++) {
  
      newArray[getDigit(arr[i],k)].push(arr[i]);
    }
    console.log(newArray);
    // arr = newArray.flat();
    // arr = [].concat(...newArray);
  }
  return arr;
};

console.log(radixSort([55,412,13,2,19]));