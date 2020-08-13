/* 
Write a function called maxSubarraySum which accepts an array of integers
and a number called n. The function should calculate the maximum sum 
of n consecutive elements in the array.

Example: 

Input: ([1, 2, 5, 2, 8, 1, 5], 2)
Output: 10

Input: ([1, 2, 5, 2, 8, 1, 5], 4)
Output: 17

Input: ([4, 2, 1, 6], 1)
Output: 6

Input: ([], 4)
Output: null 

*/

// O(N)

function maxSubArraySum(arr, num) {
	let maxSum = 0
	let tempSum = 0
	if (arr.length < num) return null
	for (let i = 0; i < num; i++) {
		maxSum += arr[i]
	}
	tempSum = maxSum
	for (let i = num; i < arr.length; i++) {
		tempsum = tempSum - arr[i - num] + arr[i]

		// if (tempSum > maxSum) {
		//      maxSum = tempSum
		// } is what's happening here v
		maxSum = Math.max(maxSum, tempSum)
	}
	return maxSum
}
