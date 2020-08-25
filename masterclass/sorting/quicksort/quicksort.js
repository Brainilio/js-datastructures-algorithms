/* 
 Quicksort pseudocode: 
 - Call pivot helper on the array 
 - When the helper returns to you the 
 updated pivot index, recursively call the pivot helper
 on the subarray to the left of that index, and the 
 subarray to the rigth of that index (splice(0, pivotindex)) & splice (pivotindex, end); 
- base case: subarray with less than 2 elements
 */

function swap(arr, index1, index2) {
	// [1, 2, 3, 4, 5]
	// index1 = 0, index2 = 1

	//temp is 1
	let temp = arr[index1]
	//arr[0] is now 2 so array becomes [2, 2, 3, 4, 5]
	arr[index1] = arr[index2]

	//and arr[1] is now [0] so [2, 1, 3, 4, 5]
	arr[index2] = temp

	return arr
}

const pivotHelper = (array, start = 0, end = array.length - 1) => {
	let pivot = array[start]
	let pivotIndex = array.indexOf(pivot)
	for (let i = pivotIndex + 1; i < array.length; i++) {
		if (pivot > array[i]) {
			pivotIndex++
			swap(array, pivotIndex, i)
		}
	}
	swap(array, start, pivotIndex)
	return pivotIndex
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
	if (left < right) {
		let pivotIndex = pivot(arr, left, right)
		quickSort(arr, left, pivotIndex - 1)
		quickSort(arr, pivotIndex + 1, right)
	}

	return arr
}
