function transformArray(nums: number[]): number[] {
    let even=[]
    let odd=[]
    for(let i=0;i<nums.length;i++){
        if(nums[i]%2==0){
            even.push(0)
        }
        else{
            odd.push(1)
        }
    }
    return even.concat(odd)
};