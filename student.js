s = "LALL"
function check(s){
    // s1=s.split('')
    let absence=0
    let late=0
    for(i=0;i<s.length;i++){
        if((s[i]=="A")){
            absence++
            if(absence>=2){
                return false
            }   
        }
        if((s[i]=="L")){
            late++
            if(late>=3){
                return false
            }   
        }
        else{
            late=0
        }
    }
    return true
}
console.log(check(s))