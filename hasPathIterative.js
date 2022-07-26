const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: [],
};

const hasPath = (graph, source, dst) => {
  const queue = [source];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current === dst) return true;
    for (neighbour of graph[current]) {
      queue.push(neighbour);
    }
  }

  return false;
};

console.log(hasPath(graph, 'f', 'k'));
