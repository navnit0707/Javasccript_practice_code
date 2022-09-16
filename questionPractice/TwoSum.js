/*
link : https://leetcode.com/problems/two-sum/
 Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 You may assume that each input would have exactly one solution, and you may not use the same element twice.
 You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 

*/

var twoSum = function (nums, target) {
  const result = nums.filter( (el) =>
      nums.includes(target - el) &&
      nums.indexOf(el) != nums.lastIndexOf(target - el)
  );
  return [nums.indexOf(result[0]), nums.lastIndexOf(result[1])];
};

/*
approach : if we subtract the given number by array data then the remainder 
          must be present in the array then it will make a complete pair .
filter method will return an array if the function returns true for particular
          conditions.
includes method will search the argument and return true or false if found or
          not found resp..
indexOf method start from 0 and iterate the array to find index of that data ,
            while lastIndexOf starts from last like 4,3,2,1.

so here i am first subtracting the data and then searching the remaining and if
found then save it in array and return it . meanwhile also checking tha not using same number twice
*/
