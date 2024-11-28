nums = [4,5,6,7,0,1,2], target = 0
// function search(nums,target){
//     for(i=0;i<nums.length;i++){
//         if(nums[i]==target){
//             return indexOf(nums[i])
//         }
//         if(nums[i]!=target){
//             return -1
//         }
//     }
// }
// console.log(search(nums,target))


function search(nums,target){
    return nums.indexOf(target)
}
console.log(search(nums,target))