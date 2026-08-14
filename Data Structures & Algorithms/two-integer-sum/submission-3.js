class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = {}
         for (let i = 0; i < nums.length; i++) {
            const wishedNumber = target - nums[i];
            if (map.hasOwnProperty(wishedNumber)) {
                return [map[wishedNumber], i];
            }
            map[nums[i]] = i;
         }
    }
}