function findTheDifference(s: string, t: string): string {
    const arr = t.split('');

    for (const char of s) {
        arr.splice(arr.indexOf(char), 1);
    }

    return arr[0];
};