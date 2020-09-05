class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class Stack {
	constructor() {
		this.first = null
		this.last = null
		this.size = 0
	}
	push(val) {
		// - accepts value
		// - creates new node with value
		// - if no node in stack, set first and last to be new node
		// - if 1 node, create variable that stores the
		// current first prop on the stack
		// - reset first prop to be new node
		// - set next prop to bet he prev created variable
		// - incremenet size of stack by 1
		let newNode = new Node(val)
		if (!this.first) {
			this.first = newNode
			this.last = newNode
		} else {
			let oldNode = this.first
			this.first = newNode
			this.first.next = oldNode
		}
		this.size++
		return this.size
	}
	pop() {
		// no nodes in stack return null
		// create temporary variable to store the first prop on stack
		// if 1 node set first and last prop to be null
		// if there is more than one node, set the first prop to be next prop on curr first
		// decrement size by 1
		// return value of node removed
		if (this.size === 0) return null
		let firstNode = this.first
		if (thisfirst === this.last) {
			this.last = null
		}
		this.first = this.first.next

		this.size--
		return firstNode.value
	}
}
