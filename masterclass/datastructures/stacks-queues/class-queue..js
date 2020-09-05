class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class Queue {
	cosntructor() {
		this.first = null
		this.last = null
		this.size = 0
	}
	enqueue(val) {
		/* 
          - Function accepts value 
          - Create new node using value passed to function 
          - If no nodes in queue set this node to be first and last property 
          - Else set next prop on curr last to be that node and then 
          set last property of the queue to be that node.
          */
		let newNode = new Node(val)
		if (!this.first) {
			this.first = newNode
			this.last = newNode
		} else {
			this.last.next = newNode
			this.last = newNode
		}
		this.size++
		return this.size
	}
	dequeue() {
		/* 
          - No first property return null 
          - Store first prop in a variable 
          - If first === last set first and last to be null 
          - If > 1 node,. set first prop to be the next property of first 
          - decrement size by 1 
          - return the value of the node dequeued 
          */
		if (!this.first) return null
		let removedNode = this.first
		if (this.first === this.last) {
			this.last = null
		}
		this.first = this.first.next
		this.size--
		return removedNode.value
	}
}
