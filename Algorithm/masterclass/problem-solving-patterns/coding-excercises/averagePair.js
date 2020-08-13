/* 
Write  afunction called averagepair. given a sorted array of 
integers and a target average, determine if there is a pair of values
in the array where the average of the pair equals the target average. there
may be more than one pair that matchest he average target.

examples: 

in: [1, 2, 3], 2.5
out: true 

in: [1, 3, 3, 5, 6, 7, 10, 12, 19], 8 
out: true 

in: [-1, 0, 3, 4, 5, 6], 4.1 
out: false 

in: [], 4
out: false

*/

// time: o(n)
// space: o(1)
// multiple pointer

function averagePair(arr, val) {
	if (arr.length <= 0) return false
	let left = 0
	let right = arr.length - 1

	while (left < right) {
		let totalAverage = arr[left] + arr[right] / 2
		if (totalAverage === val) {
			return true
		} else if (totalAverage < val) {
			left++
		} else {
			right--
		}
	}
	return false
}
