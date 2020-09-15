// * reinventing the wheel, just to understand how hashtables work * //

//hash function
const hash = (key, arrayLen) => {
	let total = 0
	//prime number in hash is helpful in spreading out the keys more uniformly
	//helpful if the array you're putting values into has a prime length
	let WEIRD_PRIME = 31
	//hashing the key passed
	for (let i = 0; i < Math.min(key.length, 100); i++) {
		let char = key[i]
		let value = char.charCodeAt(0) - 96
		total = (total * WEIRD_PRIME * value) % arrayLen
	}
	return total
}

//handling collissions

// separate chaining
/* 
With separate chaining, at each index in our array we store values using 
more sophisticated data structure (e.g. an arary or linked list). 
this allows us to store multiple key-value pairs at the same index.
*/

// Linear probing
/* 
With linear probing, when we find a collision, we search through the 
array to find the next empty slot. 
*/

class HashTable {
	constructor(size = 53) {
		this.keyMap = new Array(size)
	}
	//hashes every key that you pass in
	_hash(key) {
		let total = 0
		let WEIRD_PRIME = 31
		for (let i = 0; i < Math.min(key.length, 100); i++) {
			let char = key[i]
			let value = char.charCodeAt(0) - 96
			total = (total * WEIRD_PRIME + value) % this.keyMap.length
		}
		return total
	}
	//set a key with a value ["orange", "#asdasd"]
	set(key, value) {
		//accepts a key and value
		//hashes the key
		//stores the key-value pair in the hash table array via separate chaining
		let index = this._hash(key)
		if (!this.keyMap[index]) {
			this.keyMap[index] = []
		}
		this.keyMap[index].push([key, value])
	}
	//returns the value of the key given ["pink", "$!@#!@#"] -> if you pass in pink you get the value of it
	get(key) {
		// accept sa key
		//hashes the key
		//retrieves teh key-value pair in the hash table
		//if the key isnt found, returns undefined
		let index = this._hash(key)
		if (this.keyMap[index]) {
			//map through the array that is in the index position
			for (let i = 0; i < this.keyMap[index].length; i++) {
				//check the first element of each array int hat index (since that is the key that you passed)
				if (this.keyMap[index][i][0] === key) {
					//if its equal tot he key to that you passed, return ONLy the value! (thats why you get the 1)
					return this.keyMap[index][i][1]
				}
			}
		}
		return undefined
	}
	//returns all the keys
	keys() {
		// loops through the hash table array and returns an array of keys in the table
		let keysArr = []
		for (let i = 0; i < this.keyMap.length; i++) {
			if (this.keyMap[i]) {
				for (let j = 0; j < this.keyMap[i].length; j++) {
					//we dont want to show duplicates so if you push an existing keys, you avoid pushing it in

					if (!keysArr.includes(this.keyMap[i][j][0])) {
						keysArr.push(this.keyMap[i][j][0])
					}
				}
			}
		}
		return keysArr
	}
	values() {
		// loops through the hash table array and returns an array of keys in the table
		let valuesArr = []
		for (let i = 0; i < this.keyMap.length; i++) {
			if (this.keyMap[i]) {
				for (let j = 0; j < this.keyMap[i].length; j++) {
					//we dont want to show duplicates so if you push an existing value, you avoid pushing it in
					if (!valuesArr.includes(this.keyMap[i][j][1])) {
						valuesArr.push(this.keyMap[i][j][1])
					}
				}
			}
		}
		return valuesArr
	}
}
