words = ["pay","attention","practice","attend"], pref = "at"
function prefix(words,pref){
    count=0
    for(i=0;i<words.length;i++){
        if(words[i].startsWith(pref)){
            count++
        }
    }
    return count
}
console.log(prefix(words,pref))