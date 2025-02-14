function replaceElements(arr: number[]): number[] {
    let result =[];
    let maxRight = -1;  

    for (let i = arr.length - 1; i >= 0; i--) {
        let temp = arr[i];
        result[i] = maxRight;    
        maxRight = Math.max(maxRight, temp); 
    }

    return result;
};