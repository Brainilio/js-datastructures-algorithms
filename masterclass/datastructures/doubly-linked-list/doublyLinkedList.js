/* 
Node
-val 
next
prev

DaoublyLinkedList
Head
Tail
Length

*/

class Node {
	constructor(val) {
		this.val = val
		this.next = null
		this.prev = null
	}
}

class DoublyLinkedlist {
	constructor() {
		this.head = null
		this.tail = null
		this.length = 0
	}

	//adding a node to the end of the dll
	push(val) {
		/* 
               - Create new node witht eh value passed to the function
               - If this.head === null, set head and tial to be the newly created node 
               - If not, set next property on the tail to be that new node
               - Set the previous property on the newly created node, to be the tail 
               - Set the tail to be created the new node
          */
		let newNode = new Node(val)
		if (!this.head) {
			this.head = newNode
			this.tail = newNode
		} else {
			let oldTail = this.tail
			this.tail.next = newNode
			newNode.prev = oldTail
			this.tail = newNode
		}
		this.length++
		return this
	}

	//Remove a node from the end of the dll
	pop() {
		//!head return undefined
		//variable currtail = current tail
		//if length is 1, set head and tail to be null;
		//update tail to be prev node this.tail = this.tail.prev
		//set newtail's next to null; this.tail.prev.next = null; (lol)
		//decrement the length
		//return value that you remove;

		if (!this.head) return undefined
		let currentNode = this.tail
		if (this.length === 1) {
			this.head = null
			this.tail = null
		} else {
			let prevNode = currentNode.prev
			this.tail = prevNode
			this.tail.next = null
			//severe all ties with previous nodes to avoid links
			currentNode.prev = null
		}
		this.length--
		return currentNode
	}

	//Remove a node from the beginning of the dll
	shift() {
		// if length is 0 return undefined
		// store current head prop in variable
		// if length is 1 set head null and tail null
		// update the head to be the next of the old head; this.head = oldhead.next
		// this.head.prev = null
		// decrement length --
		// oldhead.prev = null and return oldhead

		if (this.length === 0) return undefined
		let oldHead = this.head
		if (this.length === 1) {
			this.head = null
			this.tail = null
		} else {
			this.head = oldHead.next
			this.head.prev = null
			oldHead.next = null
		}
		this.length--
		return oldHead
	}

	//Add node to beginning of doubly linked list
	unshift(val) {
		//create new node with val passed to hte function
		//if length is 0 set the head to be the new node & tail to be new node
		// else set prev property on current head to be the new node
		// set next property on new node to be the head property
		// this head is new node
		//increment length

		let newNode = new Node(val)
		if (this.length === 0) {
			this.head = newNode
			this.tail = newNode
		} else {
			this.head.prev = newNode
			newNode.next = this.head
			newNode.prev = null
			this.head = newNode
		}
		this.length++
		return this
	}

	//Access a node in a DLL by its position
	get(index) {
		//if index < 0 || >= this.length return null;
		// if index <= this.length / 2
		// loop through list starting from head and loop towards middle, return node once its found
		// if index > this.length / 2
		// loop through list starting from tail and loop towards middle
		// return node once its found.

		let medianVal = this.length / 2
		if (index < 0 || index >= this.length) return null

		if (index <= medianVal) {
			console.log("working from start")
			let beginValue = this.head
			let startcounter = 0
			while (startcounter !== index) {
				beginValue = beginValue.next
				startcounter++
			}
			return beginValue
		} else {
			console.log("working from end")
			let lastValue = this.tail
			let lastCounter = this.length - 1

			while (lastCounter !== index) {
				lastValue = lastValue.prev
				lastCounter--
			}
			return lastValue
		}
	}

	//replace value of a node to the index in a dll
	set(index, val) {
		//create a variable which is the result of the get method at teh index passed to the function
		// if get returns node, set value of that node to be the value passed to the function
		//return true
		let value = this.get(index)
		if (value !== null) {
			value.val = val
			return true
		}
		return false
	}

	//adding a node in a dll by a certain position
	insert(index, val) {
		// index < 0 || >= this.length return false;
		//if index == 0  use unshift(val)
		// if index == length push(val) ;
		// use get method to access index - 1;
		//set next and prev prop on correct nodes to link together
		//increment length
		//return true;
		if (index < 0 || index >= this.length) return false
		if (index === 0) return this.unshift(val)
		if (index === this.length) return this.push(val)
		else {
			let newNode = new Node(val)
			let previousNode = this.get(index - 1)
			let afterNode = previousNode.next
			previousNode.next = newNode
			newNode.prev = previousNode
			newNode.next = afterNode
			afterNode.prev = newNode
		}
		this.length++
		return true
	}
}

let list = new DoublyLinkedlist()
list.push(99)
list.push(28)
list.push("next item")
list.push(33)
list.push(44)
list.push(85)
console.log(list)
