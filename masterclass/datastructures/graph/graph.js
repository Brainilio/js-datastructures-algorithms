// Unweighted undirected graph

class Graph {
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

	addEdge(v1, v2) {
		/*
          Lets say you are working for an airline, you're representing
          all the connections between flights. Let's model a datastructure
          like that. An edge will represent a flight between one city 
          to another. 
          - This function should accept two vertices, we can call them v1 and v2 (two cities) 
          - The function should find in the adjacency list the key of v1 and push v2 to the array 
          - The function should find in the adjacency list the key of v2 and push v1 to the array 
         
          No error handling present
          */
		this.adjacencyList[v1].push(v2)
		this.adjacencyList[v2].push(v1)
	}
	removeEdge(v1, v2) {
		/* 
          - Two arguments, which edge do we wanna remove? 
          - Function should reassign the key of v1 to be an array that does not contain v2 
          - Function should reassign the key of v2 to be an array that does not contain v1 
          No error handling right now.
          */

		this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2)
		this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1)
	}
	removeVertex(vertex) {
		/* 
               - accept a vertex to remove 
               - function should loop as long as there are any other
               vertices in teh adjacency list for that vertex 
               - Inside of the loop, call our removeEdge function with 
               the vertex we are removing and any values in the adjacency list 
               for that vertex
               - Delete the key in that adjencylist 
          */
		for (let key in this.adjacencyList) {
			this.adjacencyList[key].map((a) => this.removeEdge(a, vertex))
		}
		delete this.adjacencyList[vertex]
	}
	DFSRecursive(vertex) {
		/* RECURSIVE SOLUTION:
          if vertex is empty return (this is the base case) 
          add vertex to results list 
          mark vertex as visited (key value pair in an object and set it to true)
          for each neighbor in vertex's neighbors: 
               if neighbor is not visited: 
               recursively call dfs on neighbor

          The function should accept a starting node
          Create a list to store the end result, to be returned at the very end 
          Create an object to store your visited vertices 
          Create a helper function which accepts a vertex
               - The helper function should return early if the vertex is empty
               - The helper function should place the vertex it accepts into the
               visited object and pusht hat vertex into the result array. 
               - Loop over all of the values in the adjacencylist for that vertex
               - If any of those values have not been visited, recursively invoke
               the helper function with that vertex
          */
		let endResult = []
		let visitedVertices = {}
		const adjacency = this.adjacencyList

		function helperFunction(v) {
			if (!v) return null

			let vertexWithValues = adjacency[v]

			visitedVertices[v] = true
			endResult.push(v)

			vertexWithValues.map((neighbor) => {
				if (!visitedVertices[neighbor]) {
					return helperFunction(neighbor)
				} else return null
			})
		}

		helperFunction(vertex)

		return endResult
	}
	DFSIterative(vertex) {
		/*   ITERATIVE SOLUTION 
          
          -- the order is different because: you pop off the end of the array that you 
          add to the stack so if you push in A and A's neighbors are [B, C] and you use
          .pop() you get the end of the array, -> C. 

               S = stack
               s.push(start) 
               while S is not empty 
               vertex = s.pop() 
               if vertex is not labeled as discovered: 
                    visit vertex (add to result list) 
                    label vertex as discovered
                    for each of vertex's neighbors, n do s.push(n)

               The function should accept a starting node
               - Create a stack to help use keep track of vertices (list/array)
               - Create a list to store the end result, to be returned at the very end
               - Create an object to store visited vertices
               - Add the starting vertex to the stack, and mark it visited
               - While the stack has something in it: 
                    - Pop the next vertex from the stack
                    - If that vertex hasn't been visited yet: 
                         - Mark it as visited
                         - Add it to the result list
                         - Push all of its neighbors into the stack
          */
		let stack = [vertex]
		let endResult = []
		let visitedVertices = {}
		let poppedVertex

		visitedVertices[vertex] = true

		while (stack.length) {
			poppedVertex = stack.pop()
			endResult.push(poppedVertex)

			this.adjacencyList[poppedVertex].map((neighbor) => {
				if (!visitedVertices[neighbor]) {
					visitedVertices[neighbor] = true
					stack.push(neighbor)
				}
			})
		}

		return endResult
	}
	BFS(vertex) {
		/*    
          - Accept a vertex
          - Create a queue (you can use an array) and place the starting vertex in it
          - Create an array to store the nodes visited
          - Create an object to store nodes visited
          - mark the starting vertex as visited
          - Loop as long as there is anything in the queue 
          - Remove the first vertex from the queue and push it into the array 
          that stores the nodes visited
          - Loop over each vertex in the adjacency list for the vertex you are visitng. 
          - If it is not inside the objcet that stores nodes visited, mark it as 
          visited and enqueue that vertex 
          - Once you have finished looping, return the array of visited nodes. 
          */

		let queue = [vertex]
		let endResult = []
		let visitedVertices = {}
		let current

		visitedVertices[vertex] = true

		while (queue.length) {
			current = queue.shift()
			endResult.push(current)

			this.adjacencyList[current].map((neighbor) => {
				if (!visitedVertices[neighbor]) {
					visitedVertices[neighbor] = true
					queue.push(neighbor)
				}
			})
		}

		return endResult
	}
}

//test cases:
let graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")
graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("B", "D")
graph.addEdge("C", "E")
graph.addEdge("D", "E")
graph.addEdge("D", "F")
graph.addEdge("E", "F")

// GRAPH We're visiting:
//              A
//          /      \
//         B        C
//          \       /
//           D --- E
//           \     /
//              F
console.group(graph.DFSRecursive("A")) // [A, B, D, E, C, F]
console.log(graph.DFSIterative("A")) // [A, C, E, F, D, B]
console.log(graph.BFS("A")) // [A, B, C, D, E, F]
