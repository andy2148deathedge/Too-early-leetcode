// LIOJ 首頁模板: https://oj.lidemy.com/
// 影片說明: https://www.youtube.com/watch?v=v7zv1ixaO3M
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin
});

var lines = [];

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on('line', function (line) {
  lines.push(line)
});

// 輸入結束，開始針對 lines 做處理
rl.on('close', function() {
  solve(lines)
});

// 上面都不用管，只需要完成這個 function 就好，可以透過 lines[i] 拿取內容
function solve(lines) {

};

/**會有三種自行測試方法:
 * 1. 直接 node XXX.JS
 *    shell/bash 輸入測試參數:1 2 
 *    此時觸發 lines.push(line) => line = ['1 2']
 *    按 Ctrl + D 觸發結束事件: rl.on('close', ... ) 
 *    就會觸發 function solve(1,2) {...} 
 * 
 * 2. 直接在 js 檔裡 call function solve(1,2) { ...; console.log(result);}
 * 
 * 3. 定義一個參數檔案 例如 input.txt
 *    txt的內容就是參數:1 2
 *    利用 bash 的 pipe 指令: "|" ，可以讓前面指令的 "輸出" 作為後面指令的 "輸入"
 *    例如:
 *    cat input.txt | node code.js
 */
