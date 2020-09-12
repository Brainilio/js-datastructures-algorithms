/**
 * @param {string} s
 * @return {boolean}
 */

/* 


Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".


 */
var isPalindrome = function (s) {
	if (s.length === 0) return true
	let regexToTest = /[^A-Za-z0-9]+/
	let newString = s.split("").map((letter) => letter.toLowerCase())
	let filteredString = newString.filter((word) => !regexToTest.test(word))
	let reversedString = []
	let counter = 0

	for (let i = filteredString.length - 1; i >= 0; i--) {
		reversedString.push(filteredString[i])
	}

	for (let i = 0; i < filteredString.length; i++) {
		if (reversedString[i] === filteredString[i]) {
			counter++
		}
	}
	if (counter === filteredString.length) {
		return true
	} else {
		return false
	}
}
