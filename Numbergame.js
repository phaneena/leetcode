nums = [5,4,2,3]
function numgame(nums){
    num1=nums.sort()
    let result=[]
    i=1
    while(i<num1.length){
        if(i%2!==0){
            result.push(num1[i])
            i--
        }
        else{
            result.push(num1[i])
            i=i+3
        }
    }
    return result
    
}
console.log(numgame(nums))

// nums = [5,4,2,3]
// function numgame(nums){
//     nums.sort((a,b)=>a-b)
//     for(let i=0;i<nums.length;i+=2){
//         [nums[i],nums[i+1]]=[nums[i+1],nums[i]]
//     }
//     return nums
    
// }
// console.log(numgame(nums))