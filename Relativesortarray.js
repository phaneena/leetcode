arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
function Sort(arr1,arr2){
    let newarr=arr2.flatMap((num)=>arr1.filter((n)=>n===num))
    let remain=arr1.filter((n)=>!arr2.includes(n)).sort((a,b)=>a-b)
    return [...newarr,...remain]
}
console.log(Sort(arr1,arr2))