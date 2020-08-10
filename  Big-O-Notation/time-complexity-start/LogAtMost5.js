function logAtMost5(n) {
	for (var i = 1; i <= Math.min(5, n); i++) {
		console.log(i)
	}
}

/* 
If I put 30, it only gives me 5; if it gives me 3, itll only give me 3
So goes to max 5 or either n. 
It doesn't matter if N grows, it only runs 5 times; if N is 2, it only runs 2 times 
As N grows, this log is only going to be constant, it doesnt matter if it vibes from 0 to 5, it doesn't change more than 5 
so: O(1)
*/
