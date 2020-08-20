function addTogether() {
	var args = Array.prototype.slice.call(arguments)

	if (arguments.length <= 1) {
		return (num) => {
			if (typeof args[0] !== "number") {
				return undefined
			} else {
				return num + args[0]
			}
		}
	}

	let total = 0

	args.map((num) => {
		if (typeof num !== "number") {
			return undefined
		} else {
			return (total += num)
		}
	})

	return total
}
