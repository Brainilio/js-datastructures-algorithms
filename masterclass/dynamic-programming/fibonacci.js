// This is a function to get the fibonacci number of the
// current number you pass in

//recursive fibonacci
/* 
     Big O of this way of solving is:
     Time complexity: O(2^n) aka exponential. It's terrible! 
     The problem: You're recalculating so many fibonaccis in some cases
*/

function fib(n) {
	if (n <= 2) return 1
	return fib(n - 1) + fib(n - 2)
}

//dynamic programming
/* 
There is overlapping, so subproblems that you've solved should be memoized
(if you've done fib(3) int he past for fib(4) no need to do fib(3) again for fib(5))
Dynamic programming is using past knowledge to make a future problem 
easier

memoization: storing the results of the expensive function calls
and returning the cached result when the same inputs occur again

big O notation of this: 
looking something up in the memo array is constant time 
As N grows, the time grows in proportion.
Time complexity: O(N) 
*/

function fib(n, memo = []) {
	if (memo[n] !== undefined) return memo[n]
	if (n <= 2) return 1
	let res = fib(n - 1, memo) + fib(n - 2, memo)
	memo[n] = res
	return res
}

//Tabulation: storing the result of a previous result in a "table"
// usually done using iteration: better space complexity can be achieved using tabulation
// calculate a new number with the two numbers that came before it using the array.
// because of recursion in the memoized version, it can lead to stack overflow.
function fib(n) {
	if (n <= 2) return 1
	var fibNums = [0, 1, 1]
	for (var i = 3; i <= n; i++) {
		fibNums[i] = fibNums[i - 1] + fibNums[i - 2]
	}
	return fibNums[n]
}
