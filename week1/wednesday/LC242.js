// LC 242. Valid Anagram
// https://leetcode.com/problems/valid-anagram/description/
// Approach: we will use hash map for this, first we will push all the letters 
// and count in the first string and for next string we will decrease the count and 
// at last we will check that all the values are 0 or not.
// Time: O(n)
// Space: O(n)
// Status: solved in 10 mins

var isAnagram = function(s, t) {
    if(s.length !== t.length) return false

    let freq= new Map()

    for(let i=0; i<s.length; i++){
        freq.set(s[i], freq.get(s[i] || 0) + 1)
    }

    for(let i=0; i<t.length; i++){
        freq.set(t[i], freq.get(t[i] || 0) - 1)
    }

    for(let value of freq.values()){
        if(value !== 0) return false
    }

    return true
}