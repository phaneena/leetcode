// p = [1,2,3], q = [1,2,3]
// function same(p,q){
//     for(i=0;i<p.length;i++){
//         if(p[i]==q[i]){
//             return true
//         }
//         return false
//     }
// }
// console.log(same(p,q))

p = [1,2,3], q = [1,2,3]
function same(p,q){
    return JSON.stringify(p)===JSON.stringify(q)
}
console.log(same(p,q))