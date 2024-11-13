n = 234
function subtractProductAndSum(n){
    let nums=String(n).split('').map(Number)
    // let nums=num.map(Number)
    let product=nums.reduce((acc,curr)=>acc*curr)
    let sum=nums.reduce((acc,curr)=>acc+curr)
    let sub=product-sum
    return sub
}
console.log(subtractProductAndSum(n));
