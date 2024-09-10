// check if a string is a Palindrome
const isPalindrome = function(str){
    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    let string = cleanedStr.split('').reverse().join('');
    // console.log(string);

    if(cleanedStr === string){
        return true;
    }else{
        return false;
    }
}
console.log("================================")
console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("Was it a car or a cat I saw?"))
console.log(isPalindrome("Hello, World!"));

//write a function to reverse a string
const reverse = function (string){
    return string.split('').reverse().join('');
}
console.log("================================")
console.log(reverse("Hello, World!")); // "!dlroW ,olleH"

// // Find the Longest Palindromic Substring.
const longestPalindromics = function(str) {
    // get a function to display the palindrom
    function palindrom(str){
        let cleanedString = str.toLowerCase().replace(/[^a-z0-9]/g, '');

        let reverse =cleanedString.split('').reverse().join('');

        return cleanedString === reverse
    }
}

// console.log(longestPalindromic("babad")); // "bab"
const anagrams = function(string1, string2){
    let cleanedStr1 = string1.toLowerCase().replace(/[^a-z]/g, '');
    let cleanedStr2 = string2.toLowerCase().replace(/[^a-z]/g, '');

    let sortedStr1 = cleanedStr1.split('').sort().join('');
    let sortedStr2 = cleanedStr2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}
console.log("================================")
console.log(anagrams("listen", "silent")); // true
console.log(anagrams("hello", "world")); // false

//Remove duplicates from a string.
const removeDuplicates = function(str){
    // step 1: clean the string
    let cleanedStr = str.toLowerCase().replace(/[^a-z]/g, '');

    let uniqueChars = {};
    let result = '';

    for(let char of cleanedStr){
        if(!uniqueChars[char]){
            uniqueChars[char] = true;
            result += char;
        }
    }

    return result; 
}
console.log("================================")
console.log("Rmeove duplicates from a sdtring")
console.log(removeDuplicates("hello world")); // "helo wrd"
console.log(removeDuplicates("programming"));
console.log(removeDuplicates("aaaaaaaaaaaa"));
console.log(removeDuplicates("abcd"));
console.log(removeDuplicates("aabbcc"));

// count palindromes in a string
const countPalindromes = function(str){
    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let count = 0;

    for(let i = 0; i < cleanedStr.length; i++){
        for(let j = i+1; j <= cleanedStr.length; j++){
            let substring = cleanedStr.slice(i, j);
            if(isPalindrome(substring)){
                count++;
            }
        }
    }

    return count;
}
console.log("================================")
console.log("count palindromes in a string")
console.log(countPalindromes("ababa"));

// longest common prefix
const longestCommonPrefix = function(strs){
    if(strs.length === 0){
        return '';
    }

    let prefix = strs[0];

    for(let i = 1; i < strs.length; i++){
        while(strs[i].indexOf(prefix) !== 0){
            prefix = prefix.slice(0, -1);
            if(prefix === ''){
                return '';
            }
        }
    }

    return prefix;
}
console.log("================================")
console.log("Longes Common Prefix");
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ""
console.log(longestCommonPrefix(["apple", "banana", "cherry"])); // ""


module.exports = { longestCommonPrefix, countPalindromes, removeDuplicates, reverse, isPalindrome };