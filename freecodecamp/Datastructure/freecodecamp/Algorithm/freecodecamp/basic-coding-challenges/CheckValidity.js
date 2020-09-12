/* 
Remove all falsy values from an array to clean it up
*/

function bouncer(arr) {
	let validArr = []
	arr.map((item) => {
		item ? validArr.push(item) : null
	})

	return validArr
}

bouncer([7, "ate", "", false, 9])
