const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: [],
};

const hasPath = (graph, source, dst) => {
  if (source === dst) return true;

  for (node in graph) {
    for (neighbour of graph[source]) {
      if (hasPath(graph, neighbour, dst) === true) {
        return true;
      }
    }
  }
};

console.log(hasPath(graph, 'f', 'g'));
