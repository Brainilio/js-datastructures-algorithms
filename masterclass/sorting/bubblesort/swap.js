/* 
Many algorithms require some sort of swap. (e.g. swapping to numbers to put them in order)
*/

function swap(arr, index1, index2) {
	// [1, 2, 3, 4, 5]
	// index1 = 0, index2 = 1

	//temp is 1
	let temp = arr[index1]
	//arr[0] is now 2 so array becomes [2, 2, 3, 4, 5]
	arr[index1] = arr[index2]

	//and arr[1] is now [0] so [2, 1, 3, 4, 5]
	arr[index2] = temp
}
