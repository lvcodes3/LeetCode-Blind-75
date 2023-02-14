// Best Time to Buy and Sell Stock

// Two Pointer Solution

// left pointer starts on day 1 (buy)
// right pointer starts on day 2 (sell)

// if left pointer value is greater than the right pointer value
    // we update left pointer to where the right pointer is at
    // we update right pointer to the next day (+1)

// if left pointer value is less than the right pointer value
    // we calculate the profit between the two values and set it as the max profit

    // now the left pointer will stay where it is at
    // we update the right pointer to the next day (+1)

        // we then compare the two pointers and if left pointer value is less than the right pointer value we repeat the process


// Memory is O(1) bc we didn't use an array, just extra pointers
// Time complexity is O(n) bc we only scanned through the array once

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
    let leftIdx = 0; // day 1 (buy)
    let rightIdx = 1; // day 2 (sell)
    let maxProfit = 0;
    // iterate through prices
    while (rightIdx < prices.length) {
        // check if left value is less than right value
        if (prices[leftIdx] < prices[rightIdx]) {
            let profit = prices[rightIdx] - prices[leftIdx];
            maxProfit = Math.max(maxProfit, profit);
        }
        else {
            // left updated to where right is left value is greater than right value
            left = right;
        }
        // update right pointer regardless
        right++;
    }
    return maxProfit;
};
