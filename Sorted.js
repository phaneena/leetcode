// nums = [1];
// target = 1
// function search(nums,target){
//     k=0
//     result=[]
//     for(i=0;i<nums.length;i++){
//         if(nums[i]==target){
//            result[k]=i
//            k++
//         }
//     }
//     if(result.length==1){
//         return [0,0]
//     }
//     else if(result.length>1){
//         return result
//     }
//     else{
//         return [-1,-1]
//     }
// }
// console.log(search(nums,target));


nums = [5,7,7,8,8,10]
target = 8
function search(nums,target){
    if(!nums.includes(target)){
        return [-1,-1]
    }
    let val1=nums.indexOf(target)
    let val2=nums.lastIndexOf(target)
    return [val1,val2]
    
}
console.log(search(nums,target));
