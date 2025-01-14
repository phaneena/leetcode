nums = [1,2,3,1,1,3]
function numIdenticalPairs(nums){
    let count=[]
    for(i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            if(nums[i]===nums[j]){
                count.push(i)
            }
        }
    }
    return count.length
}
console.log(numIdenticalPairs(nums))