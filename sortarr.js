nums = [3,1,2,4]
function sort(nums){
    let even=[]
    let odd=[]
    for(i=0;i<nums.length;i++){
        if(nums[i]%2==0){
            even.push(nums[i])
        }
        else{
            odd.push(nums[i])
        }
    }
    return even.concat(odd)
}
console.log(sort(nums))


