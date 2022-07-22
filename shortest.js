const shortestPath = (edges, source, end) => {
  const graph = buildGraph(edges);
  const visited = new Set();
  const queue = [{ dst: 0, source }];
  while (queue.length > 0) {
    const { dst, source } = queue.shift();
    if (visited.has(source)) continue;
    visited.add(source);

    if (source === end) return { dst, source };
    graph[source].forEach((neighbour) => {
      queue.push({ dst: dst + 1, source: neighbour });
    });
  }
};
const buildGraph = (edges) => {
  let graph = {};

  edges.forEach((edgeArray) => {
    const [a, b] = edgeArray;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];

    graph[a].push(b);
    graph[b].push(a);
  });
  return graph;
};
const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v'],
];

console.time('start');
console.log(shortestPath(edges, 'w', 'z'));
console.timeEnd('start');

//2.2ms
