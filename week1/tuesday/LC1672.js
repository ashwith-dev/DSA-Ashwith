// LC 1672. Richest Customer Wealth
// https://leetcode.com/problems/richest-customer-wealth/description/
// Approach: we will loop through the matrix and get the sum of the whole array/row adn compare with the richest and update it
// Time: O(m*n)
// Space: O(1)
// Status: solved in 5 mins

var maximumWealth = function(accounts) {
    let row = accounts.length
    let col = accounts[0].length
    let richest = 0;
    for (let i=0; i<row; i++) {
        let sum = 0;
        for (let j=0; j<col; j++) {
            sum+=accounts[i][j];
        }
        richest = Math.max(richest,sum);
    }
    return richest;
};

maximumWealth([[1,2,3],[3,2,1]])

// Approach2

// var maximumWealth = function(accounts) {
//     let richest = 0;
//     for(let customer of accounts){
//         let wealth = customer.reduce((a,b)=>a+b,0)
//         richest = Math.max(wealth,richest)
//     }
//     return richest
// };