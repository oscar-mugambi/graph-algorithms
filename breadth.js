const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
};

const breadth = (graph, source) => {
  const queue = [source];

  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);

    graph.current.forEach((item) => {
      queue.push(item);
    });
  }
};

console.log(breadth(graph, 'a'));
