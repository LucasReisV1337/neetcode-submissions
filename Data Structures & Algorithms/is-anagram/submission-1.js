class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false
        let hasher = {}
        for(let i=0; i < s.length; i++){
            hasher[s[i]] = (hasher[s[i]] || 0) + 1;
            hasher[t[i]] = (hasher[t[i]] || 0) - 1;
        }
        for (let key in hasher) {
            if (hasher[key] !== 0) {
                return false;
            }
        }
        return true;
    }
}
