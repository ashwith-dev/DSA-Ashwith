// LC 26. Remove duplicates from sorted array
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
// Approach: we will keep 2 pointers one is i for tracking unique elements and j is for looping through 
// the array and if we find a element which is not similar to nums[i] we will just increment i so that it 
// will go to next place and we will just replace that i element with j element and at last we know that we 
// have i unique elements so we will return the array till i index.
// Time: O(n)
// Space: O(1)
// Status: solved in 10 mins

var removeDuplicates = function(nums) {
    let i = 1;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] != nums[j-1]) {
            nums[i] = nums[j];
            i++
        }
    }
    return i
};

removeDuplicates([0,0,1,1,1,2,2,3,3,4])