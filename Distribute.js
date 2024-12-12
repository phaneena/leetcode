nums = [2,1,3]
function resultArray(nums){
    let arr1=[]
    let arr2=[]
    arr1.push(nums[0])
    arr2.push(nums[1])
    for(i=2;i<nums.length;i++){
        if(arr1.at(-1)>arr2.at(-1)){
            arr1.push(nums[i])
        }
        
        else{
            arr2.push(nums[i])
        } 
        console.log(arr1)   
    }
    console.log(arr1)
    console.log(arr2)
    return [...arr1,...arr2]
}
console.log(resultArray(nums))