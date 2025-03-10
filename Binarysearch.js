// nums = [-1,0,3,5,9,12], target = 9
// function search(nums,target){
//     for(i=0;i<nums.length;i++){
//         if(nums[i]===target){
//             return i
//         }
//     }
    
// }
// console.log(search(nums,target))

nums = [-1,0,3,5,9,12], target = 9
function search(nums,target){
    left=0
    right=nums.length-1
    while(left<=right){
        const mid=Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid; 
        } else if (nums[mid] < target) {
            left = mid + 1; 
        } else {
            right = mid - 1;
        }
    }
    return -1
    
}
console.log(search(nums,target))