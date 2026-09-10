// LC 1. Two sum
// https://leetcode.com/problems/two-sum/description/
// Approach: we will use hashmap where first we will calculate the compliment of the current 
// element to be equal to the target if it matches we will return or else we will add it to map with its index position.
// Time: O(n)
// Space: O(n)
// Status: solved in 20 mins

var twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
};