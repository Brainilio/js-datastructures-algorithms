/*
- start by picking second element in the array 
- compare the second element with the one
before it and swap if necessary
- continue to the next element and if it 
is in the incorrect order, iterate throught eh sorted portion (i.e. the left side) 
to place the elemnt in the correct place
- repeat until array is sorted. 
*/

//instructor: hard to understand;
function insertionSort(arr) {
	for (var i = 1; i < arr.length; i++) {
		var currentval = arr[i]

		for (var j = i - 1; j >= 0 && arr[j] > currentval; j--) {
			arr[j + 1] = arr[j]
		}
		arr[j + 1] = currentval
	}

	return arr
}
