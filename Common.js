nums1 = [2,3,2]
nums2 = [1,2]
let count=0
let next=0
let result=[]
for(i=0;i<nums1.length;i++){
    if(nums2.includes(nums1[i])){
        count++
    }
}
result.push(count)
for(j=0;j<nums2.length;j++){
    if(nums1.includes(nums2[j])){
        next++
    }
}
result.push(next)
console.log(result);