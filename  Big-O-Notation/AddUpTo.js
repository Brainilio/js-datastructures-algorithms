/* 
Suppose we want to write a function that 
calculates th esum of all numbers from 1 up to 
(anc including) some number n
*/

// first solution
function addUpTo(n) {
	let total = 0
	for (let i = 1; i <= n; i++) {
		total += i
	}
	return total
}

//second solution:
function addUpToTwo(n) {
	return (n * (n + 1)) / 2
}

//check performance:
let t1 = performance.now() //tells me the number of ms since document is created
addUpToTwo(1000000000)
let t2 = performance.now() // check time now after code runs

console.log(` Time elapsed: ${(t2 - t1) / 1000} seconds `)

/* lets compare: 
The second one runs way faster! Significantly shorter than the first one.
The second one is the most efficient. 
*/
