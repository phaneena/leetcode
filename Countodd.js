low = 3, high = 7
result=[]
for(i=low;i<=high;i++){
    if(i%2!=0){
        result.push(i)
    }
}
console.log(result.length)