n = 19
function happynum(n){
    let seennum=new Set()  //{}
    while(n!==1 && !seennum.has(n)){
        seennum.add(n)
        n=n.toString().split("").map(Number).map(x=>x*x).reduce((acc,curr)=>acc + curr)
    }
    return n===1
    
}
console.log(happynum(n))