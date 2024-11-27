nums = [-4,-1,0,3,10]
function Square(nums){
    let sqr=nums.map((n)=>n*n).sort((a,b)=>a-b)
    return sqr
}
console.log(Square(nums))