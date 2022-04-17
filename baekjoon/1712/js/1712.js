let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split(' ');

const a = input[0];
const b = input[1];
const c = input[2];

const sales = -(a / (b - c));

if (sales > 0) {
  console.log(Math.floor(sales) + 1);
} else {
  console.log(-1);
}