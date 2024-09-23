nums=[1,2,1]
// function concat(nums){
//     let arr=[];
//     for(i=0;i<nums.length;i++){
//         arr.push(nums[i]);
//     }
//     for(j=0;j<nums.length;j++){
//         arr.push(nums[j])
//     }
//     return arr;

// }
// console.log(concat(nums))

function concat(nums){
    let arr=[...nums,...nums];
    return arr

}
console.log(concat(nums))