console.log("Hello World!");

function add(a, b) {
  return a + b;
}

let result;
for (let i = 0; i < 10000; i++) {
  result = add(i, i);
}
console.log("result after loop  : ", result);