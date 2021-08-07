/*
 Given two positive intergers, find out if the two numbers have the same frequency of digits.

 Time: O(n)

 Sample: sameFrequency(182,281) //true
 sameFrequency(3589578,5879385) //true
 sameFrequency(22,222) //false
 sameFrequency(34,41) //false
*/
const sameFrequency = (num1, num2) => {

  const objFrequency = {};
  while (num1 > 0) {
    const key = num1 % 10;
    num1 = Math.floor(num1 / 10);
    objFrequency[key] = objFrequency[key] ? objFrequency[key] + 1 : 1;
  }

  while (num2 > 0) {

    if (objFrequency[num2 % 10] && objFrequency[num2 % 10] > 0) {
      objFrequency[num2 % 10]--;
    } else {
      return false;
    }
    num2 = Math.floor(num2 / 10);
  }
  return true;

};

console.log(sameFrequency(3589578,5879385));
console.log(sameFrequency(182,281));
console.log(sameFrequency(34, 41));
console.log(sameFrequency(22,222));