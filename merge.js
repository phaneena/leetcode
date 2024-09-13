// list1=[1,2,4];
// list2=[1,3,4];
// function merge(list1,list2){
//     let lists=[...list1,...list2];
//     lists.sort((a,b)=>(a-b));
//     console.log(lists);
// }
// merge(list1,list2);


// nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
// function merge(nums1,m,nums2,n){
//     let num1=[];
//     let num2=[];
//     for(i=0;i<m;i++){
//         num1.push(nums1[i]);
//     }
//     for(j=0;j<n;j++){
//         num2.push(nums2[j]);
//     }
//     let result=[...num1,...num2];
//     return result.sort((a,b)=>(a-b))

// }
// console.log(merge(nums1,m,nums2,n));



// function merge(nums1,m,nums2,n){
//     let nums=nums1.slice(0,m).concat(nums2.slice(0,n));
//     nums.sort((a,b)=>(a-b));
//     return nums;
// }
// console.log(merge(nums1,m,nums2,n));


nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
function merge(nums1,m,nums2,n){
    let i=m-1;
    let j=n-1;
    let last=m+n-1;
    while (i>=0 && j>=0){
        if(nums1[i]>nums2[j]){
            nums1[last]=nums1[i];
            i--;
        }
        else{
            nums1[last]=nums2[j];
            j--;
        }
        last=last-1;
    }
    while(j>=0){
        nums1[last]=nums2[j];
        j--;
        last--;
    }
}
merge(nums1,m,nums2,n)
console.log(nums1);
