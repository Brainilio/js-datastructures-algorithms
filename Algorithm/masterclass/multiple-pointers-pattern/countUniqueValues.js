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
	if (arr.length <= 0) {
		return 0
	}
	let firstPointer = 0
	let secondPointer = 1
}
