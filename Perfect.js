num=23
// let sum=0
// for(i=1;i<num;i++){
//     if(num%i==0){
//         sum=sum+i
//     }
// }
// if(sum==num){
//     console.log(true)
// }
// console.log(sum)

function Perfect(num){
    let sum=0
    for(i=1;i<num;i++){
        if(num%i==0){
            sum=sum+i
        }
    }
    if(sum==num){
        return true
    }
    else{
        return false
    }
}
console.log(Perfect(num))