//gives us next node to visit using a min-binary heap as a priority queue
class Node {
	constructor(val, priority) {
		this.val = val
		this.priority = priority
	}
}

class PriorityQueue {
	constructor() {
		this.values = []
	}
	enqueue(val, priority) {
		let newNode = new Node(val, priority)
		this.values.push(newNode)

		//bubble up;
		let index = this.values.length - 1
		let element = this.values[index]
		while (index > 0) {
			let parentIndex = Math.floor((index - 1) / 2)
			let parent = this.values[parentIndex]
			if (element.priority >= parent.priority) break
			this.values[index] = parent
			this.values[parentIndex] = element
			index = parentIndex
		}
		return this.values
	}
	dequeue() {
		const min = this.values[0]
		const end = this.values.pop()
		if (this.values.length > 0) {
			this.values[0] = end
			let idx = 0
			const length = this.values.length
			const element = this.values[0]
			while (true) {
				let leftChildIdx = 2 * idx + 1
				let rightChildIdx = 2 * idx + 2
				let leftChild, rightChild
				let swap = null

				if (leftChildIdx < length) {
					leftChild = this.values[leftChildIdx]
					if (leftChild.priority < element.priority) {
						swap = leftChildIdx
					}
				}
				if (rightChildIdx < length) {
					rightChild = this.values[rightChildIdx]
					if (
						(swap === null && rightChild.priority < element.priority) ||
						(swap !== null && rightChild.priority < leftChild.priority)
					) {
						swap = rightChildIdx
					}
				}
				if (swap === null) break
				this.values[idx] = this.values[swap]
				this.values[swap] = element
				idx = swap
			}
			return min
		}
	}
}
//this is the graph with all the vertices in there with a weight/distance between each vertex
class WeightedGraph {
	constructor() {
		this.adjacencyList = {}
	}
	addVertex(vertex) {
		/* 
          - Accepts a name of a vertex
          - Add a key to the adjacency list with the name of the vertex
          and set its value to be an empty array
          */
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
	}
	addEdge(vertex1, vertex2, weight) {
		//connect two vertices together and add a weight in an object
		this.adjacencyList[vertex1].push({ node: vertex2, weight })
		this.adjacencyList[vertex2].push({ node: vertex1, weight })
	}
	dijkstra(startVertex, endVertex) {
		/* DIJKSTRA PSEUDOCODE
          - This function should accept a starting and ending vertex
          - Create an object (we'll call it distances) and set each key to be every
          vertex in the adjacency list with a value of infinity, except for the starting
          vertex which should have a value of 0. 
          - After setting a value in the distances object, add each vertex with a priority 
          of infinity to the priority queue, except the starting vertex, which should have
          a priority 0 because that's where we begin. 
          - Create another object called previous and set each key to be every vertex in 
          the adjacency list with a value of null .
          - Start looping as long ast here is anything in the priority queue 
               - Dequeue a vertex from the priority queue 
               - If that vertex is the same as the ending vertex - we are done! 
               - Otherwise, loop through each value in the adjacency list at that vertex
                    - Calculate the distance to that vertex from the starting vertex 
                    - If the distance is less than what is currently stored in our distances 
                    object   
                         - Update the distances object with new lower distance
                         - Update the previous object to contain that vertex
                         - Enqueue the vertex with the total distance from the start node
          */
		let path = [] // to return at end
		let distances = {}
		let priority = new PriorityQueue()
		let previous = {}
		let smallest

		//Build up initial state
		Object.keys(this.adjacencyList).map((key) => {
			if (key === startVertex) {
				distances[key] = 0
				priority.enqueue(key, 0)
			} else {
				distances[key] = Infinity
				priority.enqueue(key, Infinity)
			}
			previous[key] = null
		})

		// as long as there is something to visit
		while (priority.values.length) {
			//the smallest value, vertex with lowest priority
			smallest = priority.dequeue().val
			if (smallest === endVertex) {
				// we are done
				// build up path to return
				while (previous[smallest]) {
					path.push(smallest)
					smallest = previous[smallest]
				}
				break
			}
			if (smallest || distances[smallest] !== Infinity) {
				for (let neighbor in this.adjacencyList[smallest]) {
					//find neighboring node
					let nextNode = this.adjacencyList[smallest][neighbor]
					// calculate new distance to neighboring node
					let candidate = distances[smallest] + nextNode.weight
					let nextNeighbor = nextNode.node
					if (candidate < distances[nextNeighbor]) {
						// updating new smallest distance to neighbor
						distances[nextNeighbor] = candidate
						// updating previous - How we got to neighbor
						previous[nextNeighbor] = smallest
						// enqueue in priority queue with new priority
						priority.enqueue(nextNeighbor, candidate)
					}
				}
			}
		}

		return path.concat(smallest).reverse()
	}
}

/* 
     Dijkstra = greedy algorithm
     "A": [{node: "B", weight 10}]
*/

//Test cases
let graph = new WeightedGraph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")

graph.addEdge("A", "B", 4)
graph.addEdge("A", "C", 2)
graph.addEdge("B", "E", 3)
graph.addEdge("C", "D", 2)
graph.addEdge("C", "F", 4)
graph.addEdge("D", "E", 3)
graph.addEdge("D", "F", 1)
graph.addEdge("E", "F", 1)

console.log(graph.dijkstra("A", "E")) // [ 'A', 'C', 'D', 'F', 'E' ]
