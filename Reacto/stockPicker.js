
// Stock Picker
// http://slides.com/benjaminconant/reacto-3#

// Solution - Brute Force
// const getBestProfit = (arrayOfStockPrices) => {
//   let maxProfit = 0, futureMax;
//   arrayOfStockPrices.forEach((price, index) => {
//     futureMax = Math.max(...arrayOfStockPrices.slice(index + 1));
//     if ((futureMax - price) > maxProfit) maxProfit = futureMax - price;
//   });
//   return maxProfit;
// };
// run time: O(n^2)
// space complexity: O(1)

// Solution - loop only once
const getBestProfit = (arrayOfStockPrices) => {
  let minPrice = arrayOfStockPrices[0];
  let maxProfit = 0;
  arrayOfStockPrices.forEach(price => {
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
  });
  return maxProfit;
};
// run time: O(n)
// space complexity: O(1)

const stockPrices = [10, 20, 90, 15, 7, 89, 2];

console.log(getBestProfit(stockPrices));
