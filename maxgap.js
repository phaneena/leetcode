nums = [3,6,9,1]
function gap(nums){
    n=nums.sort((a,b)=>a-b)
    max=[]
    for(i=0;i<n.length-1;i++){
        max.push(n[i+1]-n[i])
    }
    return Math.max(...max)
}
console.log(gap(nums))