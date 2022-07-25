function islandCount(grid) {
  let count = 0;
  const visited = new Set();
  const graph = buildGraph(grid);
  for (node in graph) {
    if (explore(graph, node, visited) === true) {
      count = count + 1;
    }
  }
  return count;
}

function explore(graph, node, visited) {
  if (visited.has(node)) return false;
  visited.add(node);

  for (neighbour of graph[node]) {
    const [a, b] = neighbour.split(',');
    explore(graph, `${a},${b}`, visited);
  }
  return true;
}

function buildGraph(grid) {
  const graph = {};
  for (i = 0; i < grid.length; i++) {
    for (j = 0; j < grid[i].length; j++) {
      const current = grid[i][j];
      if (current !== 'L') continue;

      let top = 'W';
      let right = 'W';
      let left = 'W';
      let bottom = 'W';

      if (i > 0) {
        top = grid[i - 1][j];
      }

      if (i < 5) {
        bottom = grid[i + 1][j];
      }

      if (j > 0) {
        left = grid[i][j - 1];
      }

      if (j < 4) {
        right = grid[i][j + 1];
      }

      graph[`${i},${j}`] = [];

      if (current === 'L') {
        if (top === 'L') {
          graph[`${i},${j}`].push(`${i - 1},${j}`);
        }
        if (right === 'L') {
          graph[`${i},${j}`].push(`${i},${j + 1}`);
        }
        if (bottom === 'L') {
          graph[`${i},${j}`].push(`${i + 1},${j}`);
        }
        if (left === 'L') {
          graph[`${i},${j}`].push(`${i},${j - 1}`);
        }
      }
    }
  }

  return graph;
}

const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

console.log(islandCount(grid));
