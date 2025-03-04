function largestAltitude(gain: number[]): number {
    let result = [0];
    for (let i = 0; i < gain.length; i++) {
        let a = result[i] + gain[i];
        result.push(a);
    }
    return Math.max(...result);
};