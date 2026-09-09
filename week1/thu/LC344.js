// LC 344. Reverse String
// https://leetcode.com/problems/reverse-string/description/
// Approach: we will loop till half of the array and swap from last elements
// Time: O(n)
// Space: O(1)
// Status: solved in 3 mins

var reverseString = function(s) {
    let n = Math.floor(s.length/2)
    let n1 = s.length-1
    for(let i=0;i<n;i++){
        [s[i],s[n1-i]]=[s[n1-i],s[i]]
    }
};

reverseString(["h","e","l","l","o"])

// Approach2: use reverse function

// var reverseString = function(s) {
//     s.reverse()
// };


