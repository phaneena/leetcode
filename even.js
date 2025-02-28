nums=[1,22,333]

function findNumbers(nums) {
    // let n=[]
    // let count=0
    // for(let i=0;i<nums.length;i++){
    //     n.push(nums[i].toString())
    // }
    // for(i=0;i<n.length;i++){
    //     if((n[i].length)%2==0){
    //         count++
    //     }
    // }
    // return count
    let count=0
    for(i=0;i<nums.length;i++){
        if((nums[i].toString().length)%2==0){
            count++
        }
    }
    return count
};
console.log(findNumbers(nums))