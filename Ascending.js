s = "1 box has 3 blue 4 red 6 green and 12 yellow marbles"
function ascending(s){
    let n=s.split(' '),r=[]
    for (let word of n) {
        if (!isNaN(word)) {
            r.push(Number(word)); 
        }
    }
    for(let i=0;i<r.length-1;i++)
    {
       // console.log(i=${r[i]} 1=${r[i+1]})
        if(r[i]>=r[i+1])
            return false
    }
    return  true
}
console.log(ascending(s))