x=-121
function palindrome(x){
    let num=String(x).split('')
    last=num.length-1
    for(i=0;i<num.length;i++){
        if(num[i]!=num[last-i]){
            return false
        }
        
    }
    return true
    
}
console.log(palindrome(x));
