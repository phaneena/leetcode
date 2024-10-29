s = "paper", t = "title"
function isomorphic(s,t){
    for(i=0;i<s.length;i++){
        if(s.indexOf(s[i])!=t.indexOf(t[i])){
            return false
        }
    }
    return true
}
console.log(isomorphic(s,t));
