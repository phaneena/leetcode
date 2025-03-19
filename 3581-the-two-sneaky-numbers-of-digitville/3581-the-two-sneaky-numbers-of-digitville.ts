function getSneakyNumbers(nums: number[]): number[] {
    let result=[]
    for(let i=0;i<nums.length;i++){
        if(nums.indexOf(i)!=nums.lastIndexOf(i)){
            result.push(i)
        }
    }
    return result
};