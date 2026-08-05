class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []
        for(const char of s){
            if(char == '('){
                stack.push(')')
            }
            else if(char == '{'){
                stack.push('}')
            }
            else if(char == '['){
                stack.push(']')
            }
            else if(stack.length == 0 || stack.pop() != char){
                return false
            }
        }
        return stack.length === 0;
    }
}
