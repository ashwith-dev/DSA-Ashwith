// LC 217. Contains Duplicates
// https://leetcode.com/problems/contains-duplicate/description/
// Approach: we use hash map for this, we update or check the hash map in every iteration , 
// if the current element is already present in the hash map we return true else after the whole loop we return false
// Time: O(n)
// Space: O(n)
// Status: solved in 10 mins

var containsDuplicate = function(nums) {
    let freq = new Map()
    for(let i=0; i<nums.length; i++){
        freq.set(nums[i], (freq.get(nums[i]) || 0) + 1)
        if(freq.get(nums[i]) > 1) return true
    }
    return false
}

containsDuplicate([1,2,3,1])
