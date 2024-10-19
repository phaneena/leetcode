// address = "1.1.1.1";
// function defang(address){
//     return address.replaceAll('.','[.]')
// }
// console.log(defang(address))


address = "1.1.1.1";
function defang(address){
    let addresses=address.split('')
    for(i=0;i<addresses.length;i++){
        if(addresses[i]=='.'){
            addresses[i]='[.]'
        }
    }
    return addresses.join('')
}
console.log(defang(address))