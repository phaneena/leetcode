num = 9669
function Max(num){
    let nums=String(num).split('')
    for(i=0;i<nums.length;i++){
        if(nums[i]!=9){
            nums[i]=9
            break
        }
    }
    return Number(nums.join(''))
   
}
console.log(Max(num))