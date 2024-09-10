// nums=[1,1,2,3,3];
// let arr=[];
// for(i=0;i<nums.length;i++){
   
//     if(nums.indexOf(nums[i])==nums.lastIndexOf(nums[i])){
//         arr.push(nums[i]);
//     }
    
// }
// if(arr.length==0){
//     console.log(null);
// }
// else{
//     console.log(arr);
// }


// nums=[3,30,34,5,9];
// var largestNumber = function(nums){
//     let arr=[];
//     for(i=nums.length-1;i>=0;i--){
//         arr.push(nums[i]);
//     }
//     return arr.join('');

// }
// console.log(largestNumber(nums));

// nums=[3,30,34,5,9];
// console.log(nums.sort().reverse());

// nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
// let arr=[...nums1,...nums2];
// console.log(arr);
// for(i=0;i<arr.length;i++){
//     if(arr[i]==0){

//     }
// }



// nums=[3,30,34,5,9];
// nums=nums.sort().reverse();
// numstr=nums.join('');
// console.log(numstr);
// numstr[0]==='0'?'0':numstr;
// console.log(numstr);


// nums=[3,30,34,5,9];
// nums=nums.sort((a,b)=>(b+=a)-(a+=b));
// console.log(nums.join(''));

nums=[3,30,34,5,9];
var largestNumber = function(nums) {
    nums = nums.map(String);
    nums.sort((a, b) => (b + a) - (a + b));
    let result = nums.join('');
    return result[0] === '0' ? '0' : result;
};
console.log(largestNumber(nums));