score = [10,3,8,9,4]
function rank(score){
    let s=[...score].sort((a,b)=>b-a)
    let result=[]
    for(i=0;i<score.length;i++){
        let position=s.indexOf(score[i])
        if(position===0){
            result.push('Gold Medal')
        }
        else if(position===1){
            result.push('Silver Medal')
        }
        else if(position===2){
            result.push('Bronze Medal')
        }
        else{
            result.push(position+1).toString()
        }
    }
    return result   
}
console.log(rank(score))