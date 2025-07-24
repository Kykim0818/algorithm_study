function maxProfit(prices: number[]): number {
    let lowPrice = prices[0];
    const lows = prices.map(( price ) => {
        if(lowPrice > price){
            lowPrice = price;
        }
        return lowPrice;
    });
    let highPrice = prices[prices.length-1];
    const highs = prices.reverse().map(( price ) => {
        if(highPrice < price){
            highPrice = price;
        }
        return highPrice;
    }).reverse();
    
    let gap = 0;
    for(let i = 0; i < prices.length; i++){
        gap = Math.max(highs[i] - lows[i], gap)
    }
    return gap;
};