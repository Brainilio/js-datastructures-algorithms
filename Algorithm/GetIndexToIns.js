/*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
*/

function getIndexToIns(arr, num) {
	//sort array
	arr.sort(function (a, b) {
		return a - b
	})

	//empty array
	let indexArr = []

	for (let i = 0; i < arr.length; i++) {
		//check if num is bigger than the value in arr
		if (num > arr[i]) {
			//check all the numbers num is bigger than and push them in indexarr
			indexArr.push(i)
		}
	}
	//check the array.length which would be the same as the index in the arr and  return it
	return indexArr.length
}

getIndexToIns([30, 35, 40, 60], 50)
