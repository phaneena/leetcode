/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    count=0
    let result
    for(let i of nums){
        if(count==0){
             result=i
        }
        count += (i === result) ? 1 : -1;
    }
    return result
};