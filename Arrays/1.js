// Two Sum

// Brute Force Approach
// checking every combination of 2 values to see if they sum up the target value
// Time Complexity of O(n^2)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum1 = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
};



// Hash Map Approach

// Time Complexity of O(n) bc we only iterate through the array once and we're only adding each
// value to our hashmap & checking if a value exists in our hashmap which are both constant time operations.

// Memory Complexity of O(n) bc we can potentially add every value in the nums array into
// the created hashmap

const twoSum2 = function(nums, target) {
    // using hashmap to store nums value as key & current index as value
    let hm = {};
    for (let i = 0; i < nums.length; i++) {
        // get the difference of the target number and the current index nums value
        let diff = target - nums[i];

        // if that difference already exists as a key in the hashmap it contains a corresponding value
        // of the index where the sum of both indexes nums value equal to the target value
        if (hm.hasOwnProperty(diff)) {
            return [hm[diff], i];
        }

        // if no solution found, set key and value in hashmap
        hm[nums[i]] = i;
    }
    return [];
};
