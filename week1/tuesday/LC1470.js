// LC 1470 Shuffle the array
// https://leetcode.com/problems/shuffle-the-array/description/
// Approach: we will loop till half of the array which is n and push the elements from starting of the array and from middle of the array
// Time: O(n)
// Space: O(n)
// Status: solved in 2 mins

var shuffle = function(nums, n) {
    let arr = []
    for(let i=0;i<n;i++){
        arr.push(nums[i],nums[n+i])
    }
    return arr
};

shuffle([2,5,1,3,4,7],3)