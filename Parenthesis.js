s = "()";
function valid(s){
    next=[];
    for(i=0;i<s.length;i++){
        if(s[i]=='(' || s[i]=='[' || s[i]=='{'){
            next.push(s[i])
        }
        else if(s[i]==')' && next[next.length-1]=='(' || s[i]==']' && next[next.length-1]=='[' || s[i]=='}' && next[next.length-1]=='{'){
            next.pop()
        }
        else{
            return false
        }
    }
    return next.length==0
}
console.log(valid(s));
