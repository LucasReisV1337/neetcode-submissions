class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hasher = {}
        for(let i = 0; i < nums.length; i++ ){
            if(!hasher[nums[i]]){
                hasher[nums[i]] = true
            }
            else {
                return true
            }
        }
    return false

    }
}
