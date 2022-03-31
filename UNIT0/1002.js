// https://oj.lidemy.com/problem/1002

var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin
});

var lines = [];

rl.on('line', function (line) {
  lines.push(line)
});

rl.on('close', function() {
  solve(lines)
});

function solve(lines) {
  for (let i = 0; i < lines.length; i++) {
    let args = lines[i].split(' ');
    let a = Number(args[0]);
    let b = Number(args[1]);
    
    if (a === 0 && b === 0) return;     

    let result = (a > b) ? a : b;
    console.log(result);
  }
};