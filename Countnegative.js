grid = [[3,2],[1,0]]
function Negative(grid){
    let group=grid.flat()
    let result=[]
    for(i=0;i<group.length;i++){
        if(group[i]<0){
            result.push(group[i])
        }
    }
    return result.length
}
console.log(Negative(grid));
