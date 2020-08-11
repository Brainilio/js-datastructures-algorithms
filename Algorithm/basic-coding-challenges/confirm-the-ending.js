/* 
Confirm if target is present at ending of string using substring method
*/

function confirmEnding(str, target) {
	return str.substring(str.length - target.length) === target
}

confirmEnding("Bastian", "n")
