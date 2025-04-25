/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let count=0
    for(i=1;i<=num;i++){
        let arr=i.toString()
        let sum=0
        for(let x of arr){
            sum+=Number(x)
        }
        if(sum%2==0){
            count++
        }
    }
    return count
};