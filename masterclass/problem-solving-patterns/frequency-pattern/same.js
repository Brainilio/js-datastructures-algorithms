/* 
Write a function same, which accepts two arrays. 
The function should return true if every value in the 
array has it's corresponding value squared int eh second
arra. The frequency of values must be the same 

Example: 
Input: [1, 2,3], [4,1,9] 
Output: True

Example: 
Input: [1,2,3], [1,9] 
Output: False

Example: 
Input: [1, 2, 1], [4, 4, 1]
Output: False (must be same frequency)

*/

// O(n) solution
function same(arr1, arr2) {
	if (arr1.length !== arr2.length) return false
	//make two separate objects
	let frequencyCounter1 = {}
	let frequencyCounter2 = {}

	//loop over every object add 1 to the frequency counter if its already in there or initialize it if it's not there
	for (let val of arr1) {
		frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
	}
	for (let val of arr2) {
		frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
	}
	//loop over each key
	for (let key in frequencyCounter1) {
		//is two squared a key in frequency counter two, return false if not
		if (!(key ** 2 in frequencyCounter2)) {
			return false
		}
		//if there is no frequency, return false
		if (frequencyCounter1[key ** 2] !== frequencyCounter1[key]) {
			return false
		}
	}
	return true
}
