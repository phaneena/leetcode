nums = [9,3,8,4,2,5,3,8,6,1];
sum=0
count=0
for(i=0;i<nums.length;i++){
    if(nums[i]%2==0 && nums[i]%3==0)
    {
        sum=sum+nums[i]
        count++
    }
}
average=sum/count;
console.log(Math.floor(average))