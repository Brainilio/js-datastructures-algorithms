/* 
truncate string at the index of the num if num is longer than string, return string
*/

function truncateString(str, num) {
	let index = []
	console.log(num)
	if (str.length > num) {
		for (let i = 0; i < str.length; i++) {
			index.push(str[i])
		}
		let newWord = [index.splice(0, num).join(""), "..."]
		return newWord.join("")
	} else {
		return str
	}
}

truncateString("A-tisket a-tasket A green and yellow basket", 8)
