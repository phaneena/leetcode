prices = [7,1,5,3,6,4]
function maxProfit(prices){
    minprice=Infinity
    profit=0
    for(i=0;i<prices.length;i++){
        if(minprice>prices[i]){
            minprice=prices[i]
        }
        else if(profit<(prices[i]-minprice)){
            profit=prices[i]-minprice
        }
    }
    return profit
}
console.log(maxProfit(prices))