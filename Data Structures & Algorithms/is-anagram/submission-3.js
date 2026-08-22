class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const hasher = new Map();

        for (let i = 0; i < s.length; i++) {
            hasher.set(s[i], (hasher.get(s[i]) || 0) + 1);
            hasher.set(t[i], (hasher.get(t[i]) || 0) - 1);
        }

        for (const value of hasher.values()) {
            if (value !== 0) {
                return false;
            }
        }

        return true;
    }
}