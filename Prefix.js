sentence = "i love eating burger", searchWord = "burg"
function Prefix(sentence,searchWord){
    const word=sentence.split(' ')
    for(i=0;i<word.length;i++){
        if(word[i].startsWith(searchWord)){
            return i+1
        }
    }
    return -1
}
console.log(Prefix(sentence,searchWord));
