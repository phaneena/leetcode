s1 = "this apple is sweet", s2 = "this apple is sour"
function uncommonFromSentences(s1,s2) {
    let a=s1.split(" ")
  
    let b=s2.split(" ")
    let c=a.concat(b)
    let result=[]
    for (let i=0;i<c.length;i++){
        if(c.indexOf(c[i])==c.lastIndexOf(c[i])){
            result.push(c[i])
        }
    }
    return result
};
console.log(uncommonFromSentences(s1,s2))