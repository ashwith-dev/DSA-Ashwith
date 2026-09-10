// LC 349. Intersection of two arrays
// https://leetcode.com/problems/intersection-of-two-arrays/description/
// Approach: we will first create a set for the first array and then next we will initialize it,
// we will loop through the 2nd array and check that if that element is there in that 1st set then we will 
// push that to 2nd set we are using set instead of array because we don't want duplicates also adn at last we will return as a array
// Time:
// Space:
// Status: solved in 20 mins

var intersection = function(nums1, nums2) {
    let list = new Set(nums1)
    let unique = new Set()
    for(let i=0; i<nums2.length; i++){
        if(list.has(nums2[i])){
            unique.add(nums2[i])
        }
    }
    return [...unique]
};

intersection([1,2,2,1],[2,2])