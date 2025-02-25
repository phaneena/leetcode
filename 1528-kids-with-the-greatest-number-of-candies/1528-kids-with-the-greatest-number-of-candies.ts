function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let maxCandies = Math.max(...candies); 
    let b=candies.map(candy => candy + extraCandies >= maxCandies);
    return b
};