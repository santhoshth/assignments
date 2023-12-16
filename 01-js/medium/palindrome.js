/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const lowerCaseString = str.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase();
  const trimmedString = lowerCaseString.split(" ").join('');
  let i = 0;
  let j = trimmedString.length - 1;
  while (i < j) {
    if (trimmedString[i] !== trimmedString[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

module.exports = isPalindrome;
