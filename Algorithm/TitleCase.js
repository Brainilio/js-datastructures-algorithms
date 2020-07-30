/* 
Titlecase first letters of each word and lowercase rest of letters.
*/

function titleCase(str) {
	let arrayString = str.toLowerCase().split(" ")

	let capitalizedLetters = arrayString.map((word) =>
		word.replace(word[0], word[0].toUpperCase())
	)

	return capitalizedLetters.join(" ")
}

console.log(titleCase("I'm a lItTlE tea pot"))
