s = "IceCreAm"
function reverse(s){
    const vowels = 'aeiouAEIOU';
    let revVowels = [];
    
    // Collect vowels from the string
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            revVowels.push(s[i]);
        }
    }
    
    // Reverse the collected vowels
    revVowels.reverse();
    let revIndex = 0;
    let result = '';
    
    // Build the result string with reversed vowels
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            result += revVowels[revIndex];
            revIndex++;
        } else {
            result += s[i];
        }
    }
    return result;
    
}
console.log(reverse(s))