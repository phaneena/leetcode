num=12
// function Perfect(num){
//     const sqr=Math.sqrt(num)
//     const perfect=Math.trunc(sqr)
//     if(sqr==perfect){
//         return true
//     }
//     else{
//         return false
//     }
    
// }
// console.log(Perfect(num))


function Perfect(num){
    const sqr=Math.sqrt(num)
    const perfect=Number.isInteger(sqr)
    return perfect
}
console.log(Perfect(num))