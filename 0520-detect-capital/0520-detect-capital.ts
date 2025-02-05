function detectCapitalUse(word: string): boolean {
         if(word.toUpperCase()==word){
       return true
    }
    else if(word.toLowerCase()==word){
        return true
    }
    else if (word.charAt(0) === word.charAt(0).toUpperCase() && word.slice(1) === word.slice(1).toLowerCase()){
        return true
    }
    else{
        return false
    }
};