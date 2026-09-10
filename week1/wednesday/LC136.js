// LC 136. Single Number
// https://leetcode.com/problems/single-number/
// Approach: we use xor for this where same numbers get cancel out and become zero 
// and at last only one number we will get that is the unique number in the array.
// Time: O(n)
// Space: O(1)
// Status: solved in 5 mins

var singleNumber = function(nums) {
    let xor=0
    for(let i=0; i<nums.length; i++){
        xor^=nums[i]
    }
    return xor
};

singleNumber([4,1,2,1,2])