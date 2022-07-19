// fibonacci sequence using recursion

function fib(n, memo = {}) {
  // gurad function
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
console.time('test');
console.log(fib(35));
console.timeEnd('test');
