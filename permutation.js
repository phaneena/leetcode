s="abc"
t="bac"
function permutation(s,t){
    let sum=0
    for(let i=0;i<t.length;i++){
        sum+=Math.abs(s.indexOf(t.charAt(i))-i)
    }
    return sum
}
console.log(permutation(s,t))