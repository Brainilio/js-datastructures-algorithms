/* 
write a function called samefrequency. given two positive integers, find out 
if the two numbers have the same frequency of digits.
your solution must have the following complexities: 
time: 0(n) 

Samples: 
In: (182, 281) 
out: true 

in: (34, 14) 
out: false 

in: (22, 222) 
out: false 
*/

//using frequency pattern O(N)
function sameFrequency(a, b) {
	let firstNumbers = a.toString().split("")
	let secondNumbers = b.toString().split("")
	let freq1 = {}
	let freq2 = {}

	if (firstNumbers.length !== secondNumbers.length) {
		return false
	}

	for (let val of firstNumbers) {
		freq1[val] = parseInt(freq1[val] || 0) + 1
	}

	for (let val of secondNumbers) {
		freq2[val] = parseInt(freq2[val] || 0) + 1
	}

	for (let key in freq1) {
		if (!freq1[key] in freq2) {
			return false
		}
		if (freq1[key] !== freq2[key]) {
			return false
		}
	}
	return true
}
