/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    let num=[]
    num.push(a)
    num.push(b)
    let result=num.reduce((acc,curr)=>acc+curr)
    return result
};