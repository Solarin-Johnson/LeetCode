/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    bank = {}
    for (i = 0; i < nums.length; i++) {
        const opp = target - nums[i]
        if (opp in bank) {
            return [bank[opp], i]
        }
        bank[nums[i]] = i
    }
    return []
};

nums = [2, 7, 11, 15]
target = 9
console.log(twoSum(nums, target))