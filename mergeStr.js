// word1 = "abc", word2 = "pqr"
// function merge(word1,word2){
//     let result=[]
//     for(i=0;i<word1.length;i++){
//         if(word1[i]){
//             result.push(word1[i])
//         }
//         if(word2[i]){
//             result.push(word2[i])
//         }
//     }
//     return result.join('')
// }
// console.log(merge(word1,word2))

word1 = "abc", word2 = "pqr"
// function mergeAlternately(word1, word2) {
//     let result = '';
//     let i = 0, j = 0;

//     while (i < word1.length || j < word2.length) {
//         if (i < word1.length) {
//             result += word1[i];
//             i++;
//         }
//         if (j < word2.length) {
//             result += word2[j];
//             j++;
//         }
//     }

//     return result;
// }
// console.log(mergeAlternately(word1,word2))


word1 = "abc", word2 = "pqr"
function merge(word1,word2){
    let result=[]
    let i=0
    let j=0
    while(i<word1.length || j<word2.length){
        if(word1[i]){
            result.push(word1[i])
           
        }
        if(word2[i]){
            result.push(word2[j])
            
        }
        i++
        j++
    }
    return result.join('')
}
console.log(merge(word1,word2))