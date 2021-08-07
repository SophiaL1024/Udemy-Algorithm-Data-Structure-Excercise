/*
 Given two positive intergers, find out if the two numbers have the same frequency of digits.

 Time: O(n)

 Sample: sameFrequency(182,281) //true
 sameFrequency(3589578,5879385) //true
 sameFrequency(22,222) //false
 sameFrequency(34,41) //false
*/

//Solution1:
const sameFrequency1 = (num1, num2) => {

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

console.log(sameFrequency1(3589578,5879385));
console.log(sameFrequency1(182,281));
console.log(sameFrequency1(34, 41));
console.log(sameFrequency1(22,222));

//Solution2: convert numbers to strings
const sameFrequency2 = (num1, num2)=> {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;
  
  let countNum1 = {};
  let countNum2 = {};
  
  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }
  
  for (let j = 0; j < strNum1.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
  }
  
  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }
 
  return true;
};
console.log(sameFrequency2(3589578,5879385));
console.log(sameFrequency2(182,281));
console.log(sameFrequency2(34, 41));
console.log(sameFrequency2(22,222));