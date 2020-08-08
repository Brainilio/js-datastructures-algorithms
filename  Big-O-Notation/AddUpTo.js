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
/* COUNTING OPERATIONS
If N is 5, there are 5 operations, if N is 100, tehre are 100 operations.
There are N additions, N assignments, N comparisons happening in the for-loop alone.
There are so many operations happening. 
*/

/* BIG O:  
Number of operations is bounded by a multiple of n => so 5 operations for 1 N 
but it would be 5 x 2 = 10 operations for 2N etc so O(N)
*/

//second solution:
function addUpToTwo(n) {
	return (n * (n + 1)) / 2
}
/* COUNTING OPERATIONS: 
1. MULTIPLICATION, ADDITION, DIVISONS: 
it doesn't even matter what n is, there are only 3 calculations happening 
*/

/* BIG O:  
As N grows, the operatiosn don't grow so this is O(1)
*/

//check performance:
let t1 = performance.now() //tells me the number of ms since document is created
addUpToTwo(1000000000)
let t2 = performance.now() // check time now after code runs

console.log(` Time elapsed: ${(t2 - t1) / 1000} seconds `)

/* lets compare: 
The second one runs way faster! Significantly shorter than the first one.
The second one is the most efficient. 
*/
