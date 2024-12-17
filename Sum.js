nums = [1,2,3,2]
function unique(nums){
    const unqueElement=nums.filter((item)=>nums.indexOf(item)===nums.lastIndexOf(item))
    return unqueElement.reduce((acc,cur)=>acc+cur,0)
}
console.log(unique(nums))