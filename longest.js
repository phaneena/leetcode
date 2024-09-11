nums=[0,-1];
function longest(nums){
    nums=nums.sort((a,b)=>(a-b))
    console.log(nums)
    if(nums.length==[]){
        return null;
    }
    else if(nums.length==1){
        return 1;
    }
    else if(nums.length==2 && nums[0]-nums[1]!=-1){
        return 1
    }
    arr=[];
    arr.push(nums[0]);
    current=0;
    maxlength=0
    for(i=0;i<nums.length;i++){
        if(nums[i]==nums[i+1]){
            continue;
        }
        if((nums[i]-nums[i+1])==-1){
            arr.push(nums[i+1]);
            current=arr.length;
            if(maxlength<current){
                maxlength=current
            }  
        }
        else{
            arr=[];
            arr.push(nums[i]);
            current=arr.length;
            if(maxlength<current){
                maxlength=current;
            }
        }
        
    }
    return maxlength;
}
console.log(longest(nums))