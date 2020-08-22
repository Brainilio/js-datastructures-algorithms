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
}

//base list
let list = new SinglyLinkedList()

//push for .next
