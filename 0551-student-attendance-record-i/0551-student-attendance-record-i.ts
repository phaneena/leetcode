function checkRecord(s: string): boolean {
    let absence=0
    let late=0
    for(let i=0;i<s.length;i++){
        if((s[i]=="A")){
            absence++
            if(absence>1){
                return false
            }   
        }
        if((s[i]=="L")){
            late++
            if(late>2){
                return false
            }   
        }
        else{
            late=0
        }
    }
    return true
};