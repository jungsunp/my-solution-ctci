
const Graph = require('./utils/Graph');

// Solution - depth first search
const checkRouteDFS = function (start, end, graph, visited = {}) {
  if (start === end) return true;
  if (visited[start]) return false;
  visited[start] = true;

  for (let edge in graph.findEdges(start)) {
    if (edge === end) return true;
    const newVisited = Object.assign({}, visited);
    if (checkRoute(edge, end, graph, newVisited)) return true;
  }

  return false;
};
// run time: O(n!)
// space complexity: O(n)

// Solution - breadth first search
const checkRoute = function (start, end, graph) {
  if (start === end) return true;
  const visited = {};
  visited[start] = true;

  let edges = Object.keys(graph.findEdges(start));
  while (edges.length > 0) {
    const tempEdges = [];
    for (let i = 0; i < edges.length; i++) {
      if (edges[i] === end) return true;
      visited[edges[i]] = true;
      for (let edge in graph.findEdges(edges[i])) {
        if (!visited[edge] && !tempEdges.includes(edge)) tempEdges.push(edge);
      }
    }
    edges = tempEdges;
  }

  return false;
};
// run time: O(n!)
// space complexity: O(n)

/* TEST */
var graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');
graph.addNode('G');
graph.addNode('H');
graph.addNode('I');
graph.addNode('K');
graph.addNode('L');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');
graph.addEdge('D', 'E');
graph.addEdge('C', 'G');
graph.addEdge('C', 'H');
graph.addEdge('B', 'G');
graph.addEdge('H', 'I');
graph.addEdge('I', 'K');
graph.addEdge('K', 'L');

console.log(checkRoute('A', 'A', graph), true);
console.log(checkRoute('A', 'C', graph), true);
console.log(checkRoute('A', 'E', graph), false);
console.log(checkRoute('B', 'A', graph), false);
console.log(checkRoute('D', 'E', graph), true);
console.log(checkRoute('A', 'L', graph), true);


