// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exp) {
	let total = 1

	if (exp === 0) return total

	return base * power(base, exp - 1)
}
