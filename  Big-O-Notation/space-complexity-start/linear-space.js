function double(arr) {
	let newArr = []
	for (let i = 0; i < arr.length; i++) {
		newArr.push(2 * arr[i])
	}
	return newArr
}

/*
its based on N numbers how many elements there will in newArr 
so O(n) example.
*/
