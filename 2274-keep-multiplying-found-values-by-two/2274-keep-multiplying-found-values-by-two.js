/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
//   for(i=0;i<nums.length;i++){
//     if(original.includes(nums[i])){
//         original=nums[i]*2
//     }
//   }

while(nums.includes(original)){
    original=original*2
}
  return original  
};