// nums = [0,1,2,2,3,0,4,2], val = 2;
// function remove(nums,val){
//     let result=[];
//     j=0;
//     // num1=nums.filter((value)=>value!=val)
//     // console.log(num1.length)
//     for(i=0;i<nums.length;i++){
//         if(nums[i]!=val){
//             result[j]=nums[i]
//             j++;
//         }
        
//     }
//     console.log(result.length)
    
// }
// remove(nums,val)


nums=[0,1,2,2,3,0,4,2];
val=2;
function remove(nums,val){
    let j=0;
    for(i=0;i<nums.length;i++){
        if(nums[i]!=val){
            nums[j]=nums[i];
            j++;
        }
    }
    return j;
}
console.log(remove(nums,val))