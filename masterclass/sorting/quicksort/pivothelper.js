/* 
Partision/Pivot helper
- In order to impement quick sort, it's useful to first
implement a function responsible arranging elements, in 
an arry on either side of a pivot 
- Given an arry, this helper function should designate an element
as the pivot. 
- It should then rearrange elements in the array so that all values
less than teh pvito are moved to the left of teh pivot, and all
valuers greater than the pivot are moved to the right of the pivot
- The order of elements on either side of the pivot doesn't matter! 
- the helper should do this in place that is it should not create a new array 
- when complete, the helper should return the index of the pivot

- Pivot should be chosen so that it'sr oughtly the median 
value in the data set you're sorting

input: [5, 2, 1, 8, 4, 7, 6, 3] 
(pick first element)
output: 4  (index of 5, where 5 should be at)
*/

//pseudo code

/* 
- Accept three args: array, start index and end index 
- Grab pivot from start of the array 
- Store pivot index in a variable (keep track of where the pivot should end up)
- Loop through array from the start untiol the end 
     - If pivot is greater than the current element, increment 
      the pivot index variable and then swap teh current element with the element at teh pivot index
- Swap the starting element (i.e. the pivot) with teh pivot index 
- Return the pivot index
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

const pivotHelper = (array, start = 0, end = array.length + 1) => {
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

console.log(pivotHelper([4, 8, 2, 1, 5, 7, 6, 3]))
