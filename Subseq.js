s = "abc", t = "ahgdc"
function sub(s,t){
    k=0
    for(i=0;i<t.length;i++){
        if(s[k]==t[i]){
            k++
        }
    }
    return s.length==k
}
console.log(sub(s,t));
