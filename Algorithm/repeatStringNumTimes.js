// repeat a string multiple times ebased on argument given

function repeatStringNumTimes(str, num) {
	let index = []
	for (let i = 0; i < num; i++) {
		index.push(str)
	}
	return index.join("")
}

repeatStringNumTimes("abc", 3)
