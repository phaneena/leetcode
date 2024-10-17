// nums=[3,0,1];
// function Missing(nums){
//     let sum=0;
//     for(i=0;i<nums.length;i++){
//          sum+=i+1-nums[i]
//     }
// }

nums=[3,0,1]
function Missing(nums){
    for(i=0;i<=nums.length;i++){
        if(!nums.includes(i)){
            return i
        }
    }
}
console.log(Missing(nums))