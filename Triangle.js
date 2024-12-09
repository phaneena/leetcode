// triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
// function minimum(triangle){
//     let newarr=[]
//     for(i=0;i<triangle.length;i++){
//         newarr.push(Math.min(...triangle[i]))
//     }
//     return newarr.reduce((acc,curr)=>acc+curr)
// }
// console.log(minimum(triangle))



triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
function minimum(triangle){
    for(let i = triangle.length-2; i>=0; i--){
        for(let j=0; j<triangle[i].length; j++){
            triangle[i][j] += Math.min(triangle[i+1][j],triangle[i+1][j+1])
        }
    }
     return triangle[0][0]
}
console.log(minimum(triangle))