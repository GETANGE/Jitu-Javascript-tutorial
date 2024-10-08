const isPalindrome = require('./palindrome')
const longestCommonPrefix = require('./palindrome')
const isAnagram = require('./palindrome')
const reverse = require('./palindrome');

describe('Palindrome Tests', () => {
    test('Should be able to check if a string is a palindrome', () => {
        expect(isPalindrome.isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
        expect(isPalindrome.isPalindrome('hello world')).toBe(false);
        expect(isPalindrome.isPalindrome('racecar')).toBe(true);
        expect(isPalindrome.isPalindrome('level')).toBe(true);
        expect(isPalindrome.isPalindrome('hello')).toBe(false);
    });
});

// Define test cases
describe('longestCommonPrefix', () => {
    test('returns the correct prefix for a common prefix', () => {
        expect(longestCommonPrefix.longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
    });

    test('returns empty string when there is no common prefix', () => {
        expect(longestCommonPrefix.longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
    });

    test('returns the full word if all words are the same', () => {
        expect(longestCommonPrefix.longestCommonPrefix(["test", "test", "test"])).toBe("test");
    });

    test('returns empty string if the array is empty', () => {
        expect(longestCommonPrefix.longestCommonPrefix([])).toBe("");
    });

    test('returns the only word if there is only one string', () => {
        expect(longestCommonPrefix.longestCommonPrefix(["singleton"])).toBe("singleton");
    });

    test('handles an array of one character strings', () => {
        expect(longestCommonPrefix.longestCommonPrefix(["a", "a", "a"])).toBe("a");
        expect(longestCommonPrefix.longestCommonPrefix(["a", "b", "c"])).toBe("");
    });
});

describe("Anagram Tests", () => {
    test("should return true for anagrams", () => {
        expect(isAnagram.anagrams("listen", "silent")).toBe(true);
        expect(isAnagram.anagrams("hello", "world")).toBe(false);
        expect(isAnagram.anagrams("apple", "banana")).toBe(false);
        expect(isAnagram.anagrams("listen", "silent")).toBe(true);
    });
})

describe("Should be able to reverse a string", () => {
    test("should reverse a string", () => {
        expect(reverse.reverse("hello world")).toBe("dlrow olleh");
        expect(reverse.reverse("programming")).toBe("gnimmargorp");
        expect(reverse.reverse("abcd")).toBe("dcba");
    });
})