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
}

let tree = new BinarySearchTree()
tree.root = new Node(10)
