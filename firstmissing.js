nums = [1,2,0]
function missing(nums){
    let x=1
    n=nums.sort((a,b)=>a-b)
    for(i=0;i<nums.length;i++){
        if(nums[i]==x){
            x++
        }
    }
    return x
}
console.log(missing(nums))