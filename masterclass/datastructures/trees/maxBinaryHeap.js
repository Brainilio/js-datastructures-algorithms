class maxBinaryHeap {
	constructor() {
		this.values = [55, 39, 41, 18, 27, 12, 33]
	}

	insert(value) {
		// push the value into the values property
		// bubble the value up to its correct spot!
		// create a variable called index which is the length of the values property - 1
		// create a variable called parentIndex which is the floor of (index-1)/2
		// keep looping as long as the values element at the parendindex is less than the values element at the child index
		// swap the values of the values element at the parentIndex with the value of the element property at the child index
		// set the index to be the parentindex, and start over!
		this.values.push(value)
		let index = this.values.length - 1
		let element = this.values[index]

		while (index > 0) {
			let parentIndex = Math.floor((index - 1) / 2)
			let parent = this.values[parentIndex]
			if (element <= parent) break
			this.values[index] = parent
			this.values[parentIndex] = element
			index = parentIndex
		}
		return this.values
	}
	extractMax() {
		/* 
			- Swap the first value in the values props with the last one
			- Pop from the values property, so you can return the value at the end 
			- Have the new root "sink-down" to the correct spot.. 
			- Your parent index starts at 0 (the root)
			- Find the index of the left child: 2 * index + 1 (make sure its not out of bounds)
			- Find the index of the right child: 2 * index + 2 (make sure its not out of bounds)
			- If the left or right child is greater than the element.. swap. If both left and right children are larger, 
			swap with the largest child. 
			- The child index you swapped to now becomes the new parent index 
			- Keep looping and swapping until neither child is larger than the element.
			- Return the old root
		*/

		const last = this.values.pop()

		if (!this.values.length) {
			return last
		}

		const max = this.values[0]

		this.values[0] = last

		let parentIndex = 0

		while (true) {
			const left = 2 * parentIndex + 1
			const right = left + 1

			const maxChildIndex =
				this.values[right] > this.values[left] ? right : left

			if (this.values[maxChildIndex] > this.values[parentIndex]) {
				const temp = this.values[parentIndex]
				this.values[parentIndex] = this.values[maxChildIndex]
				this.values[maxChildIndex] = temp

				parentIndex = maxChildIndex
			} else {
				break
			}
		}

		return max
	}
}
