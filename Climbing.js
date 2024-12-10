n=4
function climbStairs(n) {
    if(n===0){
        return 1
    }
    if(n===1){
        return 1
    }
    pre1=1
    pre2=1
    let current
    for(i=2;i<=n;i++){
        current=pre1+pre2
        pre2=pre1
        pre1=current
    }
    return current
}
console.log(climbStairs(n))
