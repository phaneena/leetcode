nums=[1,0,2,1]
function getSneakyNumbers(nums){
    let result=[]
    for(let i=0;i<nums.length;i++){
        if(nums.indexOf(i)!=nums.lastIndexOf(i)){
            result.push(i)
        }
    }
    return result
}
console.log(getSneakyNumbers(nums))