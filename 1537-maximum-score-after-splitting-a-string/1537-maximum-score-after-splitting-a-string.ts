function maxScore(s: string): number {
   let one=0
    let zero=0
    let score=0
    let left=''
    let right=''
    let total=[]
    for(let i=0;i<s.length-1;i++){
        left+=s[i]
        for(let j=i+1;j<s.length;j++){
            right+=s[j]
        }
        for(let k=0;k<left.length;k++){
            if(left[k]=="0"){
                zero++
            }
        }
        for(let k=0;k<right.length;k++){
            if(right[k]=="1"){
                one++
            }
        }
        score=one+zero
        total.push(score)
        right=''
        one=0
        zero=0
    }
    let maxScore=Math.max(...total)
    return maxScore 
};