nums = [1,15,6,3]
let sum=nums.reduce((acc,curr)=>acc+curr)
let n=nums.join('').split('').map(Number)
let nextsum=n.reduce((acc,curr)=>acc+curr)
console.log(sum-nextsum)
