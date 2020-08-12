/* 
We'll pass you an array of two numbers.
 Return the sum of those two numbers plus the 
 sum of all the numbers between them. The lowest
  number will not always come first.

For example, sumAll([4,1]) should return 10 because 
sum of all the numbers between 1 and 4 (both inclusive) is 10.

*/

function sumAll(arr) {
	let newArr = []
	let indexLow = arr[0]
	let indexHigh = arr[1]
	let totalSum = 0

	if (indexHigh > indexLow) {
		while (indexLow <= indexHigh) {
			totalSum += indexLow
			indexLow++
		}
	} else {
		while (indexLow >= indexHigh) {
			totalSum += indexHigh
			indexHigh++
		}
	}

	return totalSum
}

console.log(sumAll([4, 1]))
