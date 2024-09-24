nums=[2,5,6,9,10];
function divisor(nums){
    let maxval=Math.max(...nums);
    let minval=Math.min(...nums);
    for(i=0;i<=maxval;i++){
        if(maxval%i==0 && minval%i==0){
            value=i
        }
    }
    return value
}
console.log(divisor(nums))