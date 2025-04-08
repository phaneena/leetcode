/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
var maxDivScore = function(nums, divisors) {
    // let result=[]
    // let count=0
    // for(i=0;i<divisors.length;i++){
    //     for(j=0;j<nums.length;j++){
    //         if(nums[j]%divisors[i]==0){
    //             count++
    //         }
            
    //     }
    //     result.push(count)
    //     count=0
    // }
    // return Math.max(...result)
    let maxScore = 0;
    let bestDivisor = Infinity;

    for (let i = 0; i < divisors.length; i++) {
        let count = 0;

        for (let j = 0; j < nums.length; j++) {
            if (nums[j] % divisors[i] === 0) {
                count++;
            }
        }

        // Update the best divisor if a higher score is found
        if (count > maxScore) {
            maxScore = count;
            bestDivisor = divisors[i];
        } 
        // If scores are the same, choose the smaller divisor
        else if (count === maxScore) {
            bestDivisor = Math.min(bestDivisor, divisors[i]);
        }
    }

    return bestDivisor;


};