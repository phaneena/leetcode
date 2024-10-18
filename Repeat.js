nums = [1,3,4,2,2]
function repeat(nums){
    for(i=0;i<nums.length;i++){
        if(nums.indexOf(nums[i])!=nums.lastIndexOf(nums[i])){
            return nums[i]
        }
    }
}
console.log(repeat(nums))