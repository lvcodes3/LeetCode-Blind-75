// Product of Array Except Self

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) {
    const obj = {};
    
    for (let i = 0; i < nums.length; i++) {
        
    }
};


/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function(nums) {
    // getting the value of first element in the array as 'max'
    let max = nums[0];
    let prevMax = nums[0];
    let prevMin = nums[0];

    for (let i = 1; i < nums.length; i++) {
        // generating 'options' array
        const options = [nums[i], nums[i] * prevMax, nums[i] * prevMin];
        prevMax = Math.max(...options);
        prevMin = Math.min(...options);
        max = Math.max(max, prevMax);
    }
    return max;
};

