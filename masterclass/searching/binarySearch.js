// functiona ccepts a sorted array and a value
// create a left pointer at teh start and a right pointera t teh end of the array
//while left pointer comes before the rigth pointer
//create pointer int he middle
// if you find the value you want, return the index
//if the value is too small, move the left pointer up
//if the value is too large, move the right pointer down

//if you never find the value, return -1

//my try
function binarySearch(arr, val) {
	let left = 0
	let right = arr.length - 1

	while (left < right) {
		let middle = right + left / 2

		if (arr[middle] < val) {
			left++
		}

		if (arr[middle] > val) {
			right--
		}

		if (arr[middle] === val) {
			return middle
		}
	}

	return -1
}

//instructor:

// Original Solution
function binarySearch(arr, elem) {
	var start = 0
	var end = arr.length - 1
	var middle = Math.floor((start + end) / 2)
	while (arr[middle] !== elem && start <= end) {
		if (elem < arr[middle]) {
			end = middle - 1
		} else {
			start = middle + 1
		}
		middle = Math.floor((start + end) / 2)
	}
	if (arr[middle] === elem) {
		return middle
	}
	return -1
}

// Refactored Version
function binarySearch(arr, elem) {
	var start = 0
	var end = arr.length - 1
	var middle = Math.floor((start + end) / 2)
	while (arr[middle] !== elem && start <= end) {
		if (elem < arr[middle]) end = middle - 1
		else start = middle + 1
		middle = Math.floor((start + end) / 2)
	}
	return arr[middle] === elem ? middle : -1
}

console.log(binarySearch([1, 2, 3, 4, 5], 2))
