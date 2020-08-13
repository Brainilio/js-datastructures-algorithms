/* 
Write a function called issubsequence which takes in two strings
and checks whether the characters in the first string form 
a subsequence of teh characters int he second string. In other words
, the function should check whether the characters in the first
string appear somewhere int he second string, without their order changing. 

examples: 

in: 'hello', 'hello world'
out: true

in: 'sing', 'sting'
out: true 

in: 'abc', 'abracadabra'
out: true

in: 'abc', 'acb'
out: false order matters

must: 
time complexity - O(N + M)
space copmlexity - O(1)
*/

function isSubsequence(first, second) {
	let i = 0
	let j = 0
	if (!first) return true
	while (j < second.length) {
		if (second[j] === first[i]) {
			i++
		}
		if (i === first.length) {
			return true
		}
		j++
	}

	return false
}
