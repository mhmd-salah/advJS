function fun(n) {
  if (n == 0 || n == 1) return n;
  return n * fun(n - 1);
}

console.log(fun(5));

/*
5
4
3
2
1
*/
