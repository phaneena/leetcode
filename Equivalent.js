word1=["ab", "c"]
word2 = ["a", "bc"]
function equal(word1,word2){
    let arr1=word1.join('')
    let arr2=word2.join('')
    let result=arr1==arr2
    return result
}
console.log(equal(word1,word2))