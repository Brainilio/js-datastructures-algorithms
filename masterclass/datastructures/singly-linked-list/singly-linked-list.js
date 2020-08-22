//stores piece of data with reference to next node!
class Node {
	constructor(val) {
		//current val for the node
		this.val = val
		//reference to next node, currently null.
		this.next = null
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = 0
		this.tail = 0
		this.length = 0
	}
	push(val) {
		//grab current tail to have val as value now
		//create new node using the value passed to the function
		//if there is no head property on the list, set the head and tail to be the newly created node
		//if head = set next property on the tail to be new node, and set tail property to be new node
		//increment length by one
		let newNode = new Node(val)
		if (this.head) {
			this.head = newNode
			this.tail = newNode
		} else {
			this.tail.next = newNode
			this.tail = newNode
		}
		thislength += 1
		return this
	}
	traverse() {
		let current = this.head
		while (current) {
			console.log(current.val)
			current = current.next
		}
	}
	pop() {}
}

//base list
let list = new SinglyLinkedList()

//push for .next
