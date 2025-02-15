nums = [1,2,3,4]
function runningSum(nums){
    let result=[]
    let sum=0
    for(i=0;i<nums.length;i++){
        sum=sum+nums[i]
        result.push(sum)
    }
    return result
}
console.log(runningSum(nums))