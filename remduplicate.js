nums=[0,0,1,1,1,2,2,3,3,4]
let k=1;
for(i=1;i<nums.length;i++){
    if(nums[i]!=nums[i-1]){
        nums[k]=nums[i]
        k++;
    }
}
console.log(k)
