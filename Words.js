words = ["leet","code"], x = "e"
function findWordsContaining(words,x){
    let result=[]
    for(i=0;i<words.length;i++){
        let w= words[i].split('')
        console.log(w)
        for(j=0;j<w.length;j++)
            if(w[j]===x){
                result.push(i)
                break
            }
        
    }
    return result
}
console.log(findWordsContaining(words,x))