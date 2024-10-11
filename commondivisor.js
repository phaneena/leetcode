nums = [2,5,6,9,10]
function findgcd(nums){
    let value
    let max1=Math.max(...nums)
    let min1=Math.min(...nums)
    for(i=1;i<=min1;i++){
        if(max1%i==0 && min1%i==0){
            value=i
        }
    }
    return value
}
console.log(findgcd(nums))