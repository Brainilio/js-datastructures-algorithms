// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55

function recursiveRange(num) {
	let total = 0
	if (num === 0) return total

	total += num

	return total + recursiveRange(num - 1)
}

console.log(recursiveRange(6))
