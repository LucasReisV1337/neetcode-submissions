class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let start = 0
        let end = nums.length - 1
        while (start <= end) {
        let pivot = Math.round((start + end) / 2)
            if(nums[pivot] == target){
                return pivot
            }
            else if (nums[pivot] < target) {
                start = pivot + 1
            }

            else {
                end = pivot - 1
            }

        }
        return -1

    }
}
