

// Solution

const doesPathExist = function (graph, start, end, visited) {
  if (!visited) visited = {};
  if (visited[start]) return false;
  visited[start] = true;

  for (let i = 0; i < graph[start].length; i++) {
    if (graph[start][i] === end) return true;
    const newVisited = Object.assign({}, visited);
    if (doesPathExist(graph, graph[start][i], end, newVisited)) return true;
  }

  return false;
};
// run time: O(n!)
// space complexity: O(n)

const graph = {
  a: ['c'],
  b: ['c'],
  c: ['s', 'r'],
  d: ['a'],
  s: ['a', 'c'],
  r: ['d'],
  z: ['z']
 };

console.log('RETURNED:', doesPathExist(graph, 'a', 's')); // true
console.log('RETURNED:', doesPathExist(graph, 'a', 'b')); // false
console.log('RETURNED:', doesPathExist(graph, 'a', 'd')); // true

