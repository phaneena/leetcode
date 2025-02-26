function nextGreatestLetter(letters: string[], target: string): string {
    let char=false
    for(let i=0;i<letters.length;i++){
        if(letters[i]>target){
            char=true
            return letters[i]
            break
        }
    }
    if(!char){
        return letters[0]
    }
};