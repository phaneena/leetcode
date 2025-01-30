a = 1, b = 2
function sum(a,b){
    let num=[]
    num.push(a)
    num.push(b)
    let result=num.reduce((acc,curr)=>acc+curr)
    return result
}
console.log(sum(a,b))