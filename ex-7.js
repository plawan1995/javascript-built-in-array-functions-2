function isPalindrome(string) {
  // Start coding here
  const normalized = string.toLowerCase(); 
  const reversed = normalized.split('').reverse().join('');
  return normalized === reversed;
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false