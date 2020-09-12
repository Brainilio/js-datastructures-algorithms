/* 
Intermediate Algorithm Scripting: Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note
You have to use the arguments object.

*/

function destroyer(arr) {
	var args = Array.prototype.slice.call(arguments)
	let array = args[0]
	let restArgs = args.filter((el) => el !== array)
	let returnValue = array.filter((item) => !restArgs.includes(item))
	return returnValue
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3)
