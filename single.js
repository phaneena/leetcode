nums=[1,3,3];
// function single(nums){
    // let arr=[];
    // k=0;
        // let arr=nums.join('');

//     // return result
    // for(i=0;i<nums.length;i++){
    //     if(indexOf(i)!=lastIndexOf(i))
    //         arr[k]=nums[i];
    //         k++;
    //         // arr.push(i)
    // }
    // console.log(arr)
    
// }
// console.log(single(nums))

for(i=0;i<nums.length;i++){
    if (nums.indexOf(nums[i])==nums.lastIndexOf(nums[i])){
        console.log(nums[i])
    }
}