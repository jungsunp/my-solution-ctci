
// Graph: Does path exists?
// http://slides.com/sarahdherr/reacto-graph#/

// Solution
const doesPathExist = function (graph, start, end, visitedArr) {
  if (graph[start].includes(end)) return true;

  if (!visitedArr) visitedArr = [start];
  for (let i = 0; i < graph[start].length; i++) {
    if (!visitedArr.includes(graph[start][i])) {
      const newVisitedArr = visitedArr.slice(0);
      newVisitedArr.push(graph[start][i]);
      if (doesPathExist(graph, graph[start][i], end, newVisitedArr)) return true;
    }
  }

  return false;
};
// run time: O(n)
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
