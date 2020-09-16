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
}

//test cases:
let graph = new Graph()
graph.addVertex("Dallas")
graph.addVertex("Tokyo")
graph.addVertex("Aspen")
graph.addVertex("Los Angeles")
graph.addVertex("Hong Kong")
graph.addEdge("Dallas", "Tokyo")
graph.addEdge("Dallas", "Aspen")
graph.addEdge("Hong Kong", "Tokyo")
graph.addEdge("Hong Kong", "Dallas")
graph.addEdge("Los Angeles", "Hong Kong")
graph.addEdge("Los Angeles", "Aspen")
console.log(graph.adjacencyList)
graph.removeVertex("Tokyo")
console.log(graph.adjacencyList)
