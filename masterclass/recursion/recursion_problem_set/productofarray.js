// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
	let total = 0

	if (arr.length === 0) return total

	total += arr[0]

	return total + productOfArray(arr.splice(1))
}
