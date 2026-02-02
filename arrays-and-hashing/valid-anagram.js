/*
Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
*/


const isAnagram = (s, t) => {
    if(s.length !== t.length) return false;
    const str1 = s.split('').sort().join('');
    const str2 = t.split('').sort().join('');
    return str1 === str2;
}

const isAnagram2 = (s, t) => {
    if(s.length !== t.length) return false;
    const countS = {};
    const countT = {};
    for(let i=0; i<s.length; i++) {
        countS[s[i]] = (countS[s[i]] || 0) + 1
        countT[t[i]] = (countT[t[i]] || 0) + 1
    }

    for (const key in countS) {
        if (countS[key] !== countT[key]) return false;
    }
    return true;

}

console.log(isAnagram('aacc', 'ccac'));
console.log(isAnagram2('aacc', 'ccac'));

