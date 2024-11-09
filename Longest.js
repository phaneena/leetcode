// strs = ["flower","flow","flight"]
// function longest(strs){
//     if(strs.length===0){
//         return ''
//     }
//     result=[]
//     newr=[]
//     for(i=0;i<strs.length;i++){
//         result[i]=strs[i].split('')
//         console.log(result[i]);
//         if(indexOf(result[i])===indexOf(result[i+1]))
//             newr.push(result[i])
//     }
//     return newr
// }
// console.log(longest(strs));


strs = ["flower","flow","flight"]

function longest(strs){
    if(strs.length==0){
        return ''
    }
    let prefix = strs[0];
    for(i=1;i<strs.length;i++){
        while(strs[i].indexOf(prefix)!==0){
            prefix=prefix.slice(0,-1)
            if(prefix==''){
                return ''
            }
        }
    }
    return prefix
}
console.log(longest(strs));
