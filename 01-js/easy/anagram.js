/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const formattedString1 = str1.toLowerCase().split("").sort().join("");
  const formattedString2 = str2.toLowerCase().split("").sort().join("");

  return formattedString1 === formattedString2 ? true : false;
}

module.exports = isAnagram;
