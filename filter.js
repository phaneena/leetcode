arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
function filter(arr,fn){
    let result=[]
    for(i=0;i<arr.length;i++){
        if (fn(arr[i])){
            result.push(arr[i],i)
        }
    }
    return result
}
console.log(filter(arr,fn))