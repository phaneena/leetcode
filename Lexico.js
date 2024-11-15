n=13
function lexicographic(n){
    let arr=[]
    for(i=0;i<=n;i++){
        arr.push(i)
    }
    return arr.sort()
}
console.log(lexicographic(n));
