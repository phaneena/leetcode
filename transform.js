nums = [4,3,2,1]
function transformarr(nums){
    let even=[]
    let odd=[]
    for(i=0;i<nums.length;i++){
        if(nums[i]%2==0){
           
            even.push(0)
        }
        else
            odd.push(1)
        
    }
    return even.concat(odd)

}
console.log(transformarr(nums))