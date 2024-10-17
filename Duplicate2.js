// nums=[1,2,3,1,2,3]
// k=2
// function Duplicate(nums,k){
//     for(i=0;i<nums.length;i++){
//         for(j=i+1;j<nums.length;j++){
//             if(nums[i]==nums[j] && Math.abs(i-j)<=k)
//                 return true
//         }
//     }
//     return false
// }
// console.log(Duplicate(nums,k))


// nums=[1,2,3,1,2,3]
// k=2
// function Duplicate(nums,k){
//     for(i=0,j=i+1;i<nums.length;i++,j++){
//             if(nums[i]==nums[j] && Math.abs(i-j)<=k)
//                 return true
//     }
//     return false
// }
// console.log(Duplicate(nums,k))

nums=[1,2,3,1,2,3]
k=2
function Duplicate(nums,k){
    for(i=0;i<nums.length;i++){
        for(j=i+1;j<=i+k && j<nums.length;j++){
            if(nums[i]==nums[j])
                return true
        }
    }
    return false
}
console.log(Duplicate(nums,k))