class Node {
	constructor(val, priority) {
		this.val = val
		this.priority = priority
	}
}

/* 
Write a Min Binary heap - lower number means higher priority. 

- Each node has a val and a priority. Use the priority to build the heap. 
- Enqueue method accepts a value and priority, makes a new node and puts it in the right spot 
based off of its priority. 
- Dequeue method removes root element, returns it, and rearranges heap using priority.
*/

class PriorityQueue {
	constructor() {
		this.values = []
	}
	enqueue(val, priority) {
		let newNode = new Node(val, priority)
		this.values.push(newNode)

		//bubble up;
		let index = this.values.length - 1
		let element = this.values[index]
		while (index > 0) {
			let parentIndex = Math.floor((index - 1) / 2)
			let parent = this.values[parentIndex]
			if (element.priority >= parent.priority) break
			this.values[index] = parent
			this.values[parentIndex] = element
			index = parentIndex
		}
		return this.values
	}
	dequeue() {
		const min = this.values[0]
		const end = this.values.pop()
		if (this.values.length > 0) {
			this.values[0] = end
			let idx = 0
			const length = this.values.length
			const element = this.values[0]
			while (true) {
				let leftChildIdx = 2 * idx + 1
				let rightChildIdx = 2 * idx + 2
				let leftChild, rightChild
				let swap = null

				if (leftChildIdx < length) {
					leftChild = this.values[leftChildIdx]
					if (leftChild.priority < element.priority) {
						swap = leftChildIdx
					}
				}
				if (rightChildIdx < length) {
					rightChild = this.values[rightChildIdx]
					if (
						(swap === null && rightChild.priority < element.priority) ||
						(swap !== null && rightChild.priority < leftChild.priority)
					) {
						swap = rightChildIdx
					}
				}
				if (swap === null) break
				this.values[idx] = this.values[swap]
				this.values[swap] = element
				idx = swap
			}
			return min
		}
	}
}
