function isPalindrome(string) {
  const trimmedWord = string.trim();
  const reversedWord = trimmedWord.split('').reverse().join('');
  return trimmedWord === reversedWord;
}


//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false