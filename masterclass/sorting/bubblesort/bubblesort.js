/* 
Pseudocode: 
- Start looping from
the end of the array twoards the beginning 
with a variable called i
- start an inner loop with a variable called j from the 
beginning until i - 1 
- if arr[j] is greater than arr[j+1], swap those two value
- return the sorted array
*/

//needless comparison at the end, so theresno treason to keep looping until the end

function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr)
		for (let j = 0; j < arr.lenth; j++) {
			if (arr[j] > arr[j + 1]) {
				//Swap:
				var temp = arr[j]
				arr[j] = arr[j + 1]
				arr[j + 1] = temp
			}
		}
	}
	return arr
}

// following pseudocode:
function bubbleSort(arr) {
	//you can also use this for swap:
	// const swap = (arr, indx1, indx2) => {
	//      [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]]
	// }

	for (var i = arr.length; i > 0; i--) {
		for (var j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				//swap!

				//then call the swap here if you want to: swap(arr, j, j+1)
				var temp = arr[j]
				arr[j] = arr[j + 1]
				arr[j + 1] = temp
			}
		}
	}
	return arr
}

//new code with checking if you made a swap; if you did a swap, then don't loop, if you did: don't
// this is good for nearly sorted arrays
function bubbleSort(arr) {
	var noSwaps

	for (var i = arr.length; i > 0; i--) {
		noSwaps = true
		for (var j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				var temp = arr[j]
				arr[j] = arr[j + 1]
				arr[j + 1] = temp
				noSwaps = false
			}
		}
		if (noSwaps) break
	}
	return arr
}

bubbleSort([37, 45, 29, 8])
