function logAtLeast5(n) {
	for (var i = 1; i <= Math.max(5, n); i++) {}
	console.log(i)
}

/* 
We have a loop: goes from 1 to 5 or either N;
If we worry about 5, only if N is small ( under 5) 
But what happens if N is 1 million? Then this loop is going to 
run 1 million time 
If N grows, the number grows so: O(N)
*/
