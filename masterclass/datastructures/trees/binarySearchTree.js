class Node {
	constructor(value) {
		this.value = value
		this.left = null
		this.right = null
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null
	}

	insert(value) {
		/* 
               - create new node 
               - start at the root 
                    - check if there is root -> no ? -> root becomes new node 
                         - if there is root, check if val of new node is greater or less than val of root 
                              - if greater -> check if there is a node to the right 
                                             -> yes? move to the node and repeat these steps
                                             -> no? add the node as teh rigth property

                         - if less -> check if there is a node to the left 
                                   -> if there is, move to that node and repeat these steps 
                                   -> if there is not, add node as left property 
          */
		let newNode = new Node(value)
		if (!this.root) {
			this.root = newNode
			return this
		} else {
			let current = this.root
			while (true) {
				//check for duplicates, you can also keep track of a counter
				if (value === current.value) return undefined
				//check left side and traverse until theres no left side
				if (value < current.value) {
					if (!current.left) {
						current.left = newNode
						return this
					}
					current = current.left
				}
				// check right side and traverse until theres no right side
				else if (value > current.value) {
					if (!current.right) {
						current.right = newNode
						return this
					}
					current = current.right
				}
			}
		}
	}

	contains(value) {
		/* 
          - Start at Root
          - If no root = done searching
          - If root && root === value ? true : false 
          - If root !=== value: 
               - If val > root: 
                    - if there isn't a node to the right: done searching
                    - if there is a node on the right: move to that node and follow steps
               - If val < root
                    - if there isnt a node to the left: done searching
                    - if there is a node on the left: move to that node and follow steps
          */
		if (!this.root) return false
		let current = this.root
		let found = false
		while (current && !found) {
			if (value < current.value) {
				current = current.left
			} else if (value > current.value) {
				current = current.right
			} else if (value === current.value) {
				found = true
			}
		}
		return found
	}

	bfs() {
		// *** iteratively *** ///
		/* 
		- Create a queue (can be an array)
		and a variable to store the values of nodes visited
		- Place the root node in the queue 
		- Loop as long ast ehre is anything in the queue 
		- Dequeue a node from the queue and push the value of the node into 
		the variable that stores the nodes 
		- If there is a left property on the node dequeued - add it to the queue 
		- If there is a right property on the node dequeued add it to the queue
		*/
		let queue = []
		let visitedNodes = []
		let node = this.root

		queue.push(node)

		while (queue.length) {
			//first element
			node = queue.shift()
			visitedNodes.push(node)
			if (node.left) queue.push(node.left)
			if (node.right) queue.push(node.right)
		}

		return visitedNodes
	}

	DFSPreOrder() {
		// steps - recursively
		/* 
			- create a variable to store the values of nodes visited 
			- store the root of the bst in a variable called current 
			- write a helper function which accepts a node 
			- push the value of the node to the variable that stores the values
			- if the node has a left property, call the helper function with the left 
			left property of the node 
			- if the node has a right property, call the helper function with the right property
			on the node 
			- invoke the helper function with teh current variable
			- return the arrays of values 
		*/
		let visitedNodes = []
		let current = this.root
		function traverse(node) {
			visitedNodes.push(node.value)
			if (node.left) {
				traverse(node.left)
			}
			if (node.right) {
				traverse(node.right)
			}
		}
		traverse(current)
		return visitedNodes
	}

	DFSPostOrder() {
		// recursively //
		/* 
			- create a variable to store teh values of nodes visited; 
			- store the root of the bst in a variable called current 
			- write a helper function which accepts a node 
				- if the node has a left proeprty call the helper function with 
				the left property on the node 
				- if the node has a right property call the helper function with 
				the right property on teh node 
				- push the values of the node to the variable that stores the
				values
				- invoke the helper function with teh current variable
		*/
		let visitedNodes = []
		let current = this.root
		function traverse(node) {
			if (node.left) {
				traverse(node.left)
			}
			if (node.right) {
				traverse(node.right)
			}
			visitedNodes.push(node.value)
		}
		traverse(current)
		return visitedNodes
	}

	DFSInOrder() {
		let visitedNodes = []
		let current = this.root
		function traverse(node) {
			if (node.left) {
				traverse(node.left)
			}
			visitedNodes.push(node.value)
			if (node.right) {
				traverse(node.right)
			}
			visitedNodes.push(node.value)
		}
		traverse(current)
		return visitedNodes
	}
}

let tree = new BinarySearchTree()
