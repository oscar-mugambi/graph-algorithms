// fibonacci sequence using recursion

function fib(n, memo = {}) {
  // gurad function
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}
console.time('test');
console.log(fib(200));
console.timeEnd('test');
