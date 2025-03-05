function totalMoney(n: number): number {
   let total = 0; 
    let week = 1;  
    let day = 0;    
    
    for (let i = 1; i <= n; i++) {
        total += week + day;  
        day++;              
        
        if (day == 7) {    
            day = 0;
            week++;
        }
    }
    return total;
};