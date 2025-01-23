s = "anagram", t = "nagaram"
function isAnagram(s,t){
    if(s.length!=t.length){
        return false
    }
    const sorteds=s.split('').sort().join("")
    const sortedt=t.split('').sort().join("")
    return sorteds===sortedt
}
console.log(isAnagram(s,t))