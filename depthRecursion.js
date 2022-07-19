const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
};

const recursive = (graph, source) => {
  console.log(source);

  graph.source.forEach((item) => {
    recursive(graph, item);
  });
};

console.log(recursive(graph, 'a'));
