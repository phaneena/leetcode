num = 38
function add(num){
    while(num>=10){
        num=String(num).split('').map(Number).reduce((acc,curr)=>acc+curr,0)
    }
    return num
}
console.log(add(num))