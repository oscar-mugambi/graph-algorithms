const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
};

function grid(graph, source) {
  const stack = [source];
  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);
    graph[current].forEach((item) => {
      stack.push(item);
    });
  }
}
console.log(grid(graph, 'a'));
