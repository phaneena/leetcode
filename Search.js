nums = [1,3,5,6], target = 5
function search(nums,target){
    let first=0
    let last=nums.length-1
    while(first<=last){
        let mid=Math.floor((first+last)/2)
        if(nums[mid]==target){
            return mid
        }
        else if(nums[mid]<target){
            first=mid+1
        }
        else{
            last=mid-1
        }
    }
    return first

}
console.log(search(nums,target));
