nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr * curr; }
init = 100
function reduce(nums,fn,init){
    let val=init
    for(i=0;i<nums.length;i++){
        val=fn(val,nums[i])
    }
    return val
}
console.log(reduce(nums,fn,init))