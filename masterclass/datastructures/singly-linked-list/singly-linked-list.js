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
		// increase length with +1
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

	pop() {
		// no nodes int he list? return undefined
		// loop through list until you reach the tail
		// set the next property oft he 2nd to last node to be null
		// set the tail to be the 2nd to last node
		// decrement length of the list by 1
		// return valuie of the node removed
		if (!this.head) {
			return undefined
		}
		let current = this.head
		let newTail = current

		// while you can still do current.next
		while (current.next) {
			newTail = current
			current = current.next
		}
		this.tail = newTail
		this.tail.next = null
		this.length--
		if (this.length === 0) {
			this.head = null
			this.tail = null
		}
		return current
	}

	shift() {
		// no nodes return undefined
		// store current ehad property in a vafriable
		// set head property to be the current heads next property
		// decrement the length
		// return the value of the node removed
		if (this.length === 0) {
			this.tail = null
			this.head = null
			return undefined
		}
		let shiftedHead = this.head
		this.head = shiftedHead.next
		this.length--
		return currentHead
	}

	unshift(val) {
		//accepts value
		// create new node using the value passed to the function
		// no head?,. set head and tail to new node
		// else new node.next = current head
		// new node is head
		//increment length of teh list by 1
		//return linked list

		let newVal = new Node(val)
		if (!this.head) {
			this.head = newVal
			this.tail = newVal
		} else {
			newVal.next = this.head
			this.head = newVal
		}
		this.length++
		return this
	}

	get(index) {
		//get index
		//if index <= zero || >= length return null
		//loop throguh list until you reach the index and retunr the node at that specific index
		if (index < 0 || index >= this.length) return null
		let current = this.head
		let counter = 0
		while (counter !== index) {
			current = current.next
			counter++
		}
		return current
	}

	set(index, val) {
		//change indexed value
		//accepts index and val
		//use get method to find specific node
		//if node is not found, return false
		//if node is found, set teh value of that node to be the value passed to the function and return true
		let nodeToBeChanged = this.get(index)
		if (nodeToBeChanged) {
			nodeToBeChanged.val = val
			return true
		}
		return false
	}

	insert(index, val) {
		// insert at a specific position
		// index < 0 || index > length return false
		// if(index === length) insert at end (push(val))
		// if(index === 0) unshift(val)
		// find get(index - 1)
		// set the next roperty on that node ^ to be new node
		// set next property o n the new node to be the previous next
		if (index < 0 || index > this.length) {
			return false
		}
		if (index === this.length) {
			return !!this.push(val)
		}
		if (index === 0) {
			return !!this.unshift(val)
		} else {
			let newNode = new Node(val)
			let preIndexVal = this.get(index - 1)
			let nextVal = preIndexVal.next
			preIndexVal.next = newNode
			newNode.next = nextVal
			this.length++
			return true
		}
	}

	remove(index) {
		// removing node from linkedlist at a specific position
		// index < zero || > length return undefined
		// index === length - 1 ? .pop
		// index === 0, .shift
		// .get(index - 1), .next = .next.next
		// length--
		// return node.val removed
		if (index < 0 || index >= this.length) return undefined
		if (index === length - 1) return this.pop()
		if (index === 0) return this.shift()
		else {
			let prevNode = this.get(index - 1)
			let removed = prevNode.next
			prevNode.next = removed.next
			this.length--
			return removed
		}
	}

	reverse() {
		//swap head and tail
		//create variable called next
		//create variable called prev
		//create variable called node =  new Node(this.head)
		//loop through list
		//next = next prop on node.
		//next property on node is prev;
		//node variable = value of next VARIABLE
		let node = new Node(head)
		this.head = this.tail
		this.tail = node
		let next
		let prev = null
		for (var i = 0; i < this.length; i++) {
			next = node.next
			node.next = prev
			prev = node
			node = next
		}
		return this
	}

	print() {
		let arr = []
		let current = this.head
		while (current) {
			arr.push(current.val)
			current = current.next
		}
		return arr
	}
}

//base list
let list = new SinglyLinkedList()
