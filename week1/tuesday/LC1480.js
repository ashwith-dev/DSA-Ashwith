// LC 1480. Running Sum of 1d Array
// https://leetcode.com/problems/running-sum-of-1d-array/description/
// Approach: we will loop through the array and add the previous element to the current element
// Time: O(n)
// Space: O(1)
// Status: solved in 5 mins

var runningSum = function(nums) {
    for(let i=1;i<nums.length;i++){
        nums[i]+=nums[i-1]
    }
    return nums
};

runningSum([1,2,3,4])