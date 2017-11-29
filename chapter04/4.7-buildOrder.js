// directed graph
var Graph = require('./utils/Graph');

// Solution - DFS
// Problem is called: Topological sort
const nodeWithNoChild = (graph) => {
  for (let node in graph.nodes) {
    if (Object.keys(graph.findEdges(node)).length < 1) return node;
  }
};

const buildOrder = (projects, dependencies) => {
  const buildOrderArr = [];

  // Build graph
  const graph = new Graph();
  projects.forEach(proj => graph.addNode(proj));
  dependencies.forEach(dep => graph.addEdge(dep[0], dep[1]));

  // Start putting leaves into build order
  let curNode = nodeWithNoChild(graph);
  while (curNode) {
    buildOrderArr.unshift(curNode);
    graph.removeNode(curNode);
    curNode = nodeWithNoChild(graph);
  }

  return (buildOrderArr.length === projects.length) ? buildOrderArr : Error;
};
// run time: O(P + D) - P: project num, D: dependency num
// space complexity: O(P + D)

/* TEST */
var projects = ['a', 'b', 'c', 'd', 'e', 'f'];
var dependencies = [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']];

console.log(buildOrder(projects, dependencies));
