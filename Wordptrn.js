pattern = "jquery", s = "jquery"
function wordpattern(pattern,s){
    if(pattern.length==s.length){
        return true
    }
    s=s.split(' ')
    pattern=pattern.split('')
    for(i=0;i<s.length;i++){
        if(pattern.indexOf(pattern[i])!=s.indexOf(s[i])){
            return false
        }
    }
    return true

}
console.log(wordpattern(pattern,s));
