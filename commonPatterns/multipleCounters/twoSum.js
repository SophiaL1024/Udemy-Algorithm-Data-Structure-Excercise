// Two Sum
/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.*/

/*Example: Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//Time complexcity: O(nlog(n))
let twoSum = function(nums, target) {
  // copy the original array to retain the original index
  const copyNum = [...nums];
  
  nums.sort((a,b)=>a - b);
  //Multiple pointers pattern
  let tail = nums.length - 1;
  let head = 0;
  while (head < tail) {
    if (nums[head] + nums[tail] === target) {
      //use indexOf() and lastIndexOf() to enssure if there are duplicatde elements in the arrary, return different index
      return [copyNum.indexOf(nums[head]),copyNum.lastIndexOf(nums[tail])];
    } else if (nums[head] + nums[tail] > target) {
      tail--;
    } else {
      head++;
    }
  }
  
};

