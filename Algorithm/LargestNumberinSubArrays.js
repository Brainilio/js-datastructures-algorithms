/* lets say you have an array [[231, 23, 451], [21, 321, 45]]
and you want to return the largest number of each subarray into one new array
*/

function largestOfFour(arr) {
	let index = []
	for (let i = 0; i < arr.length; i++) {
		//procedural // assume first index is the largest
		let largestNumber = arr[i][0]
		for (let j = 1; j < arr[i].length; j++) {
			//compare first index with the rest in the array starting with index 1 to compare with 0 if it is bigger, make largestnumber that number
			if (arr[i][j] > largestNumber) {
				//change largestnumber if in loop you find another largest number
				largestNumber = arr[i][j]
			}
		}
		//push largest numbers into index
		index.push(largestNumber)
	}
	return index
}

largestOfFour([
	[4, 5, 1, 3],
	[13, 27, 18, 26],
	[32, 35, 37, 39],
	[1000, 1001, 857, 1],
])
