const connectedComponentCount = (graph) => {
  let count = 0;
  const visited = new Set();

  for (node in graph) {
    if (explore(graph, node, visited) == true) {
      count = count + 1;
    }
  }
  return count;
};

const explore = (graph, current, visited) => {
  if (visited.has(String(current))) return false;
  visited.add(String(current));

  for (neighbour of graph[current]) {
    explore(graph, neighbour, visited);
  }

  return true;
};

console.log(
  connectedComponentCount({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2],
  })
);
