nums = [2,0,2,1,1,0]
function sort(nums){
    let temp
    for(i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            if(nums[i]>nums[j]){ 
                temp=nums[i]
                nums[i]=nums[j]
                nums[j]=temp
            }
        }
    }
    return nums
}
console.log(sort(nums))