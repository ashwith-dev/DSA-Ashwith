// LC 387. First unique character in a string
// https://leetcode.com/problems/first-unique-character-in-a-string/description/
// Approach: we will create a hash map and then again looping through the hash map 
// when we will get the count as 1 we will get that index
// Time: O(n)
// Space: O(n)
// Status: solved in 15 mins

var firstUniqChar = function(s) {
    let char = new Map()

    for(let i=0; i<s.length; i++){
        char.set(s[i],(char.get(s[i]) || 0) + 1)
    }
    for(let [key,value] of char){
        if(value == 1) return s.indexOf(key)
    }
    return -1
};

firstUniqChar("leetcode")