function countUpAndDown(n) {
	console.log("GOing up!")

	for (let i = 0; i < n; i++) {
		console.log(i)
	}
	console.log("At the top!\n Going down...")
	for (let j = n - 1; j >= 0; j--) {
		console.log(j)
	}
	console.log("Back down. Bye")
}

/* BIG O: 
2 for loops, as n grows, the loop grows so: O(N)
same goes for the second one so also O(N)
This will be a linear graph, so the bigger the N, the longer it takes to run
*/
