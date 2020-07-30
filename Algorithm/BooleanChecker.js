/* check if given value is a boolean or not */

function booWho(bool) {
	if (typeof bool !== "boolean") {
		return false
	} else {
		return true
	}
}

booWho(null)
