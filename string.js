let st = 'hello';
let result = 0;

for (let i = 0; i < st.length - 1; i++) {
    result += Math.abs(st.charCodeAt(i) - st.charCodeAt(i + 1));
}

console.log(result);
