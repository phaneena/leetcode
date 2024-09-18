// nums=[1,2,3,4];
// function duplicate(nums){
//     result=new Set(nums);
//     console.log(result);
//     if(nums.length==result.size){
//         return false
//     }
//     else{
//         return true;
//     }
    
// }
// console.log(duplicate(nums));


nums=[1,2,3,4,1,2];
function duplicate(nums){
    result=[];
    for(i=0;i<nums.length;i++){
        if(result[nums[i]]){
            return true;
        }
        result[nums[i]]=true;

    }
    return false
}
console.log(duplicate(nums));