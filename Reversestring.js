s = "Let's take LeetCode contest"

function reversed(){
     s=s.split(' ')
     result=[]
    
     for(i=0;i<s.length;i++){
       reverseword=s[i].split('').reverse().join('')
       result.push(reverseword)
     }
     return result.join(' ')
}
console.log(reversed(s));
