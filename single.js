// nums = [2,2,1]
// function single(nums){
//     if(nums.length==1){
//         return nums[0]
//     }
//     let sorted=nums.sort((a,b)=>a-b)
//     for(i=0;i<sorted.length;i++){
//         if(sorted[i]!=sorted[i+1]){
//             return sorted[i]
//         }
//     }
// }
// console.log(single(nums));



nums = [2,2,1]
function single(nums){
    if(nums.length==1)return nums[0]
  nums = nums.sort()
  for(let i = 0 ; i <=nums.length-1 ; i+=2)
  {
    if (i==nums.length-1)  return nums[nums.length-1]
    if(nums[i]!=nums[i+1])
    {
        return nums[i]
    }

  }
}
console.log(single(nums));

