/* 
Implement a function called countuniquevalues, which accepts 
a sorted array, and counts the unique values int he array. There
can be negative numbers int he array, but it will always be sorted.

Examples: 
Input: [1, 1, 1, 1, 1, 2] 
Output: 2

Input: [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]
Output: 7

Input: [] 
Output: 0

Input: [-2, -1, -1, 0, 1]
Output: 4

*/

function countUniqueValues(arr) {
	//if array length is zero or has nothing in it at all, return 0
	if (arr.length <= 0) {
		return 0
	}

	//left pointer
	let left = 0
	//right pointer
	let right = 1

	//while right is not at the end of the array index
	while (right < arr.length) {
		//if arr[1] is equal to arr[0] you want to move right because its not an unique value
		if (arr[right] === arr[left]) {
			right++
		}

		//however if youe ncounter a unique value, move the pointer up first
		// and then replace the number at arr[left] with arr[right]
		if (arr[left] !== arr[right]) {
			left++
			arr[left] = arr[right]
		}
	}

	//left is basically on the count of where the last unique value in the
	//array is, so you can return left
	return left
}

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 5, 5, 5, 6, 7]))
