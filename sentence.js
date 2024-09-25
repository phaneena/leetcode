s1 = "this apple is sweet"
s2 = "this apple is sour";
s1=s1.split(' ');
s2=s2.split(' ')
// console.log(s1)
// console.log(s2)
let arr=[...s1,...s2]
console.log(arr)
let result=[];
for(i=0;i<arr.length;i++){
    if (arr.indexOf(arr[i])==(arr.lastIndexOf(arr[i]))){
        console.log(arr[i])
    }

}
