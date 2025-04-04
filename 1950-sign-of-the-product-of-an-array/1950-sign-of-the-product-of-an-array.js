/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    if(nums.includes(0)){
        return 0
    }
    let result=nums.reduce((acc,curr)=>acc*curr)
    if(result>0){
        return 1
    }
    else if(result<0){
        return -1
    }
    else if(result==0){
        return 0
    }
};