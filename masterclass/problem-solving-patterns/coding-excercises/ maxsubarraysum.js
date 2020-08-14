/*
Given an array of integers and a number, write a function called
maxsubarraysum, which finds the maximum sum of a subarray with teh length
of the number passed to the function. 

note that a subarray must consist of consecutive elements fromt he 
original array. in the first example below, [100, 200, 300] is a subarray of the 
original array, but 100, 300 is not. 

in: [100, 200, 300, 400], 2
out: 700

in: [2, 3], 3
out: null

in: [1, 4, 2, 10, 23, 3, 1, 0, 20], 4 
out: 39 

*/

function maxSubarraySum(arr, num) {
	if (arr.length < num) return null

	let total = 0
	for (let i = 0; i < num; i++) {
		total += arr[i]
	}
	let currentTotal = total
	for (let i = num; i < arr.length; i++) {
		currentTotal += arr[i] - arr[i - num]
		total = Math.max(total, currentTotal)
	}
	return total
}
