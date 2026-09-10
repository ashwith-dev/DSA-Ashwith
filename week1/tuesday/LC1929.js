// LC 1929. Concatenation of Array
// https://leetcode.com/problems/concatenation-of-array/description/
// Time: O(n)
// Space: O(n)
// Status: solved in 1 min

// Approach 1: we will return a array where we will spread the nums 2 times 

var getConcatenation = function(nums) {
    return [...nums,...nums]
};

getConcatenation([1,2,1])

// Approach 2: we will concat the nums with nums and return

// var getConcatenation = function(nums) {
//    return nums.concat(nums)
// };
