/* 

Have a function call itself until basecase is met.
The condition when the recursion ends.

*/

function countDown(num) {
	if (num <= 0) {
		console.log("All done!")
		return
	}
	console.log(num)
	num--
	countDown(num)
}
