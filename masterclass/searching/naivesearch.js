//pseudo code
//loop over longer string
//if the character sdon't match, break out
// of the inner loop
// if they do match, move to next character, if you hit
//end of short-string, you foun da match
//increment counter of matches
//return the counter

//my try lol
function stringSearch(str, pattern) {
	let counter = 0

	for (let i = 0; i < str.length; i++) {
		for (let j = 0; j < pattern.length; i++) {
			if (str[i] === pattern[j]) {
				console.log(str[i])
			}
		}
	}
}

//instructor:

function naiveSearch(long, short) {
	var count = 0
	for (var i = 0; i < long.length; i++) {
		for (var j = 0; j < short.length; j++) {
			if (short[j] !== long[i + j]) break
			if (j === short.length - 1) count++
		}
	}
	return count
}

naiveSearch("lorie loled", "lol")

console.log(stringSearch("zomgzomgwowzomg", "omg"))
