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
			//if this is the first ever node to the list, add it to tail and head.
			this.head = newNode
			this.tail = newNode
		} else {
			//make the tail the node that you want to push onto it. (next) also gives the new node
			this.tail.next = newNode
			this.tail = newNode
		}
		//increase length with +1
		thislength += 1
		return this
	}

	traverse() {
		//this head is the node that you add to it (so New Node(val))
		let current = this.head
		while (current) {
			current = current.next
		}
	}

	pop() {}
}

//base list
let list = new SinglyLinkedList()

//push for .next
