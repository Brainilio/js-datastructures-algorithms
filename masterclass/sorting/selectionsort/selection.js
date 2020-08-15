/*
- Store first element as the smallest value you've seen so far
- Compare this item to the next item int he array until you fin da smalle rnumber
- If you don't find a value. keep going; if you do, save the index of where that index is found, so
that you can swap (index of 0 swap with index of 3)
- if the minimum is not teh value(index) you initially began with, swap the two values 
- Repeat this with the next element until the array is sorted
*/

function selectionSort(arr) {
	for (var i = 0; i < arr.length; i++) {
		var lowest = i
		for (var j = lowest + 1; j < arr.length; j++) {
			if (arr[j] < arr[lowest]) {
				//lowest is now going to be the index of the value that is smaller
				lowest = j
			}
		}
		if (i !== lowest) {
			var temp = arr[i]
			arr[i] = arr[lowest]
			arr[lowest] = temp
		}
	}
	return arr
}
