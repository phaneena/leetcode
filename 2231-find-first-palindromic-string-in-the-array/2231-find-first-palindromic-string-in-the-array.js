/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    return words.find(x=>x ===x.split('').reverse().join(''))|| ""
    
};