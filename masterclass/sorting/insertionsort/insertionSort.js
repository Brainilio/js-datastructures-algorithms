/*
- start by picking second element in the array 
- compare the second element with the one
before it and swap if necessary
- continue to the next element and if it 
is in the incorrect order, iterate throught eh sorted portion (i.e. the left side) 
to place the elemnt in the correct place
- repeat until array is sorted. 
*/

//instructor: hard to understand;
function insertionSort(arr) {
	for (var i = 1; i < arr.length; i++) {
		var currentval = arr[i]

		for (var j = i - 1; j >= 0 && arr[j] > currentval; j--) {
			arr[j + 1] = arr[j]
		}
		arr[j + 1] = currentval
	}

	return arr
}

//other solution
function arraymove(arr, fromIndex, toIndex) {
	var element = arr[fromIndex]
	arr.splice(fromIndex, 1)
	arr.splice(toIndex, 0, element)
}

function sort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let newIndex = i
		for (let j = i - 1; j >= 0; j--) {
			if (arr[j] > arr[i]) newIndex = j
			else break
		}
		if (i !== newIndex) arraymove(arr, i, newIndex)
	}
	return arr
}

//another
function insertionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		const currentValue = arr[i]
		let swapableIndex = i
		for (let j = i - 1; j >= 0; j--) {
			if (arr[j] > currentValue) {
				arr[j + 1] = arr[j]
				swapableIndex = j
				continue
			} else {
				break
			}
		}
		arr[swapableIndex] = currentValue
	}
	return arr
}
