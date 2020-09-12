// Reverse a string

//Option 1
function reverseString(str) {
	let newArray = []
	for (let i = str.length - 1; i >= 0; i--) {
		newArray.push(str[i])
	}
	return newArray.join("")
}

reverseString("hello")

//Option 2
function reverseString(str) {
	return str.split("").reverse().join("")
}
