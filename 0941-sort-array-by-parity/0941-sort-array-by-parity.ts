function sortArrayByParity(nums: number[]): number[] {
    let even=[]
    let odd=[]
    for(let i=0;i<nums.length;i++){
        if(nums[i]%2==0){
            even.push(nums[i])
        }
        else{
            odd.push(nums[i])
        }
    }
    return even.concat(odd)
};