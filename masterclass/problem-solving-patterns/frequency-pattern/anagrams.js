/*
Given two strings, write a function to determine if the second
string is an anagram of the first. An anagram is a word, phrase, 
or name formed by rearranging the letters of another, such as cinema, 
formed from iceman. 

examples: 
input: '', ''
output: true

input: 'aaz', 'zza'
output: false

input: 'anagram', 'nagaram'
output: true

input: 'rat', 'car'
output: false

assumptions: 
- all lower case letters
- spaces etc ar enot in here
*/

function validAnagram(firststring, secondstring) {
	//return object
	if (firststring.length !== secondstring.length) {
		return false
	}

	let freqCounter1 = {}
	let freqCounter2 = {}

	for (let val of firststring) {
		freqCounter1[val] = (freqCounter1[val] || 0) + 1
	}
	for (let val of secondstring) {
		freqCounter2[val] = (freqCounter2[val] || 0) + 1
	}

	for (let key in freqCounter1) {
		if (!freqCounter1[key] in freqCounter2) {
			return false
		}
		if (freqCounter1[key] !== freqCounter2[key]) {
			return false
		}
	}
	return true
}

console.log(validAnagram("hello", "olleh"))
