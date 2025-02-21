nums = [1,2,2,1], k = 1
function countKDifference(nums,k){
    let count=0
    for(i=0;i<nums.length;i++){
        for(j=0;j<nums.length;j++){
            if(nums[i]-nums[j]==k){
                count++
            }
        }
        
    }
    return count
}
console.log(countKDifference(nums,k))