function commonChars(words: string[]): string[] {
    let word=words[0].split("")
    let result=[]
    for(let x of word){
        if(words.every(word=>word.includes(x))){
            result.push(x)
            words = words.map(w => w.replace(x, ''));
        }
    }
    return result
};