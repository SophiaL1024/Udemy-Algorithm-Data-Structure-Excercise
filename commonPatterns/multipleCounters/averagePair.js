//Given a sorted array of intergers and a target average, determin if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

//Bonus constraints: Time: O(n), Space: O(1)

/* Sample: averagePair([1,2,3],2.5) //true
averagePair([1,3,3,56,6,7,10,12,19],8) //true
averagePair([-1,0,3,4,5,6],4.1) //false
averagePair([],8) //false
 */

const averagePair = (arr,target)=>{
  let head = 0;
  let tail = arr.length - 1;
  while (head < tail) {
    if ((arr[head] + arr[tail]) / 2 === target) {
      return true;
    } else if ((arr[head] + arr[tail]) / 2 > target) {
      tail--;
    }
    head++;
  }
  return false;
};

console.log(averagePair([1,2,3],2.5));
console.log(averagePair([1,3,3,56,6,7,10,12,19],8));
console.log(averagePair([-1,0,3,4,5,6],4.1));
console.log(averagePair([],8));