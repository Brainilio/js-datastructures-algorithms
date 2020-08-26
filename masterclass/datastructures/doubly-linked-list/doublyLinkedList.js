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

	//adding a node to the end of the doublylinkedlist
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

	//Remove a node from the end of the doublylinkedlist
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
}

let list = new DoublyLinkedlist()
list.push(99)
list.push(28)
list.push("next item")
console.log(list)
