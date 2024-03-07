/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) return 0;
  let currentWordLength = words[0].length;
  let restOfWordsLenght = longest(words.slice(1));
  return Math.max(currentWordLength, restOfWordsLenght);
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 0) return "";
  let currentLetter = str[0];
  let restOfLetters = everyOther(str.slice(2));
  return currentLetter + restOfLetters;
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length === 0) return true;
  let firstLetter = str[0];
  let lastLetter = str[str.length - 1];
  let restOfStr = str.slice(1, str.length - 1);
  return firstLetter === lastLetter && isPalindrome(restOfStr);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  if (arr.length === 0) return -1;
  if (arr[0] === val) return 0;
  let restOfArrIndex = findIndex(arr.slice(1), val);
  if (restOfArrIndex === -1) return -1;
  return restOfArrIndex + 1;
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length === 0) return "";
  let lastLetter = str[str.length - 1];
  let restOfStr = revString(str.slice(0, -1));
  return lastLetter + restOfStr;
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let result = [];
  for (const key in obj) {
    if (typeof obj[key] === "string") {
      result.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      result = result.concat(gatherStrings(obj[key]));
    }
  }
  return result;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  if (arr.length === 0) return -1;
  if (arr[0] === val) return 0;
  let restOfArrIndex = binarySearch(arr.slice(1), val);
  if (restOfArrIndex === -1) return -1;
  return restOfArrIndex + 1;
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
