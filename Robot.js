moves = "RRDD"
function robot(moves){
    a=moves.split('')
    console.log(a);
    
    let  x=0
    let  y=0
    for(i=0;i<a.length;i++){
        if( a[i]=='U'){
            x++
        }
        else if( a[i]=='D'){
            x--    
        }
        else if( a[i]=='L'){
            y--  
        }
        else if(a[i]=='R'){
            y++
        }
    }

    if(x==0 && y==0){
        return true
    }
    else{
        return false
    }
}
console.log(robot(moves));
