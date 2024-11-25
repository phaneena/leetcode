nums = [null, {}, 3]
function array(nums){
    if(nums.length==0){
        return -1
    }
    return nums[nums.length-1]
}
console.log(array(nums))