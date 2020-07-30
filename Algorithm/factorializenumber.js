// Factioralize a number in a function

//Recursion
function factorialize(num) {
	if (num === 0) {
		return 1
	} else {
		return num * factorialize(num - 1)
	}
}

// For loop
function factorialize(num) {
	for (var product = 1; num > 0; num--) {
		product *= num
	}
	return product
}
