const Largest = (graph) => {
  const visited = new Set();
  let highest = 0;
  for (node in graph) {
    const size = calculate(graph, node, visited);

    if (size > highest) {
      highest = size;
    }
  }
  return highest;
};

const calculate = (graph, current, visited) => {
  if (visited.has(String(current))) return false;
  visited.add(String(current));
  let size = 1;
  for (neightbour of graph[current]) {
    size += calculate(graph, neightbour, visited);
  }
  return size;
};

console.log(
  Largest({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2],
  })
);
