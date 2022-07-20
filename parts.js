const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n'],
];

const undirectedPath = (edges, nodeA, nodeB, visited) => {
  const graph = buildGraph(edges);
  return hasPath(graph, nodeA, nodeB, visited);
};

const hasPath = (graph, source, dst, visited) => {
  if (source === dst) return true;
  if (visited.has(source)) return false;

  visited.add(source);

  for (neighbour in graph[source]) {
    if (hasPath(graph, neighbour, dst, visited) === true) {
      return true;
    }
  }

  return false;
};

const buildGraph = (edges) => {
  const graph = {};
  edges.forEach((edge) => {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  });
  return graph;
};

undirectedPath(edges, 'i', 'm', new Set());
