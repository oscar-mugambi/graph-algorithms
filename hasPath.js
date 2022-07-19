const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: [],
};

// const hasPath = (graph, source, dst) => {
//   if (source === dst) return true;

//   for (neighbour of graph[source]) {
//     if (hasPath(graph, neighbour, dst) === true) {
//       return true;
//     }
//   }
//   return false;
// };

// console.log(hasPath(graph, 'f', 'k'));

const hasPath = (graph, source, dst) => {
  const queue = [source];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current === dst) return true;
    graph[current].forEach((item) => queue.push(item));
  }

  return false;
};

console.log(hasPath(graph, 'f', 'k'));
