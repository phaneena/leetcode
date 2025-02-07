function heightChecker(heights: number[]): number {
   let ex=[...heights].sort(function(a,b) {return a-b});

let count=0;
    for(let i=0;i<heights.length;i++){
        if(heights[i]!=ex[i]){
            count++;
        }
    }
    return count 
};