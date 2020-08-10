function printAllPairs(n) {
	for (var i = 0; i < n; i++) {
		for (var j = 0; j < n; j++) {
			console.log(i, j)
		}
	}
}

/*
first loop based on N so O(N)
second loop is also based on N right? O(N) 
o(n) operation inside of an o(n) operation = O(N^2)
If n = 3 the second pair will be 3 x 3 so 9 pairs in total 
if n = 5 all the pairs wil be 25\
*/
