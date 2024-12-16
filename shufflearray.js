nums = [2,5,1,3,4,7], n = 3
function shuffle(nums,n){
    let result=[]
    let arr1=nums.slice(0,n)
    let arr2=nums.slice(n)
    for(i=0;i<arr1.length;i++){
        result.push(arr1[i])
        result.push(arr2[i])
    }
    return result
}
console.log(shuffle(nums,n))