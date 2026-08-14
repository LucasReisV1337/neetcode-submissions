class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = {}
        for (const num of nums) {
            if (num in map) {
                map[num] += 1
            }
            else {
                map[num] = 1
            }
        }
        for (const key in map) {
            if (map[key] > 1) {
                return true
            }
        }
        return false
    }
}