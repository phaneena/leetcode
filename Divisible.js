n = 5, m = 6
function Difference(n,m){
    let a=0
    let b=0
    for(i=1;i<=n;i++){
        if(i%m!=0){
            a+=i
        }
        if(i%m==0){
            b+=i
        }
    }
    return a-b
    
}
console.log(Difference(n,m))