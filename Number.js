// n=8
// dig=0
// while(n>0){
//     rem=n%2
//     dig=dig*10+rem
//     n=Math.floor(n/2)
// }
// console.log(dig.reverse());
// num=String(dig)
// invert=''
// for(i=0;i<num.length;i++){
//     invert+=num[i]==0 ? 1 : 0
// }
// console.log(invert);



num=10
let b = [];
while (num > 0) {
    b.push(num % 2);
    num = Math.floor(num / 2);
}    
b.reverse();  
    
for (let i in b) { 
    b[i] = b[i] === 0 ? 1 : 0;
}
    
let complement = 0;
for (let i = 0; i < b.length; i++) {
    complement = complement * 2 + b[i];
}
console.log(complement);



