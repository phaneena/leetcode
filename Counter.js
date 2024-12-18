let n = 10;
let arr=['call','call','call']
let res=[]
function createCounter(n) {
    for(i=0;i<arr.length;i++){
        res.push(n++)
    } 
    return res    
}
console.log(createCounter(n))
