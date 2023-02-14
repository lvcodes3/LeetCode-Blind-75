// Contains Duplicate

// Brute Force Solution 
// Time Complexity of O(n^2) bc we use a nested loop
// Memory Complexity of O(1) bc no other data structures used
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate1 = function(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) return true;
        }
    }
    return false;
};


// Sort the Array Solution
// Time Complexity of O(n log n) bc we use JavaScript built in sort
// Memory Complexity of O(1) bc no other data structures used
const containsDuplicate2 = function(nums) {
    // O(n log n) bottleneck
    nums.sort();
    for (let i = 0; i < nums.length - 1; i++) {
        // use a second pointer to compare adjacent values in the array
        let j = i + 1;
        if (nums[i] === nums[j]) return true;
    }
    return false;
};


// Hash Map Solution
// Time Complexity of O(n) bc we only loop once through the array
// Memory Complexity of O(n) bc we might nearly have to add all the elements into the hash map
const containsDuplicate3 = function(nums) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) {
            return true;
        }
        obj[nums[i]] = true;
    }
    return false;
};