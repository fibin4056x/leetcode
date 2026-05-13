/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minprice= Infinity;
    let maxprofit =0;

    for (let price of prices){
        if(price<minprice){
            minprice=price;
        }
        let  profit = price- minprice

        if(profit>maxprofit){
            maxprofit=profit;
        }
    }
    return maxprofit;
};