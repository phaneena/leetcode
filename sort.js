arr = [{"x": 1}, {"x": 0}, {"x": -1}]
fn = (d) => d.x
function Sort(arr,fn){
    const sorted=arr.sort((a,b)=>fn(a)-fn(b))
    return sorted
}
console.log(Sort(arr,fn));
