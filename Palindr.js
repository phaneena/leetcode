words = ["abc","car","adad","racecard","cool"]
function firstPalindrome(words){
    let rev=[]
    for(i=0;i<words.length;i++){
        rev[i]=words[i].split("").reverse().join('')
        if(words[i]==rev[i]){
            return words[i]
        }
    }
    return ""

    
}
console.log(firstPalindrome(words))