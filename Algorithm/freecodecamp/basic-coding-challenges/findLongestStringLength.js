//find the longest string length in a sentence

//option 1
function findLongestWordLength(str) {
	let emptyArray = str.split(" ")
	let arrayWithStringLength = []
	for (let i = 0; i < emptyArray.length; i++) {
		arrayWithStringLength.push(emptyArray[i].length)
		// compares first two elements of an array and pushes   // biggest one to the end
		arrayWithStringLength.sort((a, b) => a - b)
	}

	return arrayWithStringLength[emptyArray.length - 1]
}

console.log(
	findLongestWordLength(
		"The quick brown fox jumped over the lazy dog otorhinolaryngology"
	)
)

//option 2
function findLongestWord(str) {
	var arr = str.split(" ") //split sentence to an array
	var longestWord = arr[0] //assume longest word is the first word of an array
	for (var i = 0; i < arr.length; i++) {
		//iterate through array of words

		if (arr[i].length > longestWord.length) {
			//compare other words of an array if they are longer than the first one
			longestWord = arr[i]
		}
	}
	return longestWord.length //return length of the longest word
}
//test
findLongestWord("What if we try a super-long word such as otorhinolaryngology")
