nums=[1,2,3,4]
function minimum(nums){
    let count=0
    for(i=0;i<nums.length;i++){
        if(nums[i]%3===1 || nums[i]%3===2){
            count++
        }
    }
    return count
}
console.log(minimum(nums))