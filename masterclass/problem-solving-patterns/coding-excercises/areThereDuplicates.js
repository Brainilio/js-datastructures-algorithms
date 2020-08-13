/* 
Implement a function called, arethereduplicates which accepts a variable
number of arguments, and checks whether there are any duplicates
among the arguments passed in. You can solve this using the
frequency counter pattern or the multiple pointers pattern.

ex: 

in 1, 2, 3 
out: false 

in: 1 2 2 
out: true 

in: a b c a 
out: true
*/

//using freq pattern
// time - o(n)
// space - o(n)

function areThereDuplicates() {
	var args = Array.prototype.slice.call(arguments)

	let freq = {}
	for (let val of args) {
		freq[val] = (freq[val] || 0) + 1
	}

	for (let key in freq) {
		if (freq[key] > 1) {
			return true
		}
	}

	return false
}

//multiple pointer solution

function areThereDuplicates(...args) {
	// Two pointers
	args.sort((a, b) => a > b)
	let start = 0
	let next = 1
	while (next < args.length) {
		if (args[start] === args[next]) {
			return true
		}
		start++
		next++
	}
	return false
}

// one liner

function areThereDuplicates() {
	return new Set(arguments).size !== arguments.length
}
