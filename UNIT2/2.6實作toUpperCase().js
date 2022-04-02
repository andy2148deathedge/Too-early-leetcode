/**
 內建函式 String.toUpperCase()可以把字串英文小寫轉為大寫
 這次實作則是要用ASC碼轉換方式自己實作這個函式
 雖然還是用JS內建ASC2來做就是了:
  1. char.charCodeAt(): return 值是該 char 的 ASC碼
     string.charCodeAt(i): return 值是該字串的第 i 個字母的 ASC碼
　2. String.fromCharCode(number): 將 number 型態 ASC 碼轉為 char
 */

let str = 'fjioheihpg';
let upperStr = '';
for(let i = 0; i < str.length; i++) {
  let ascCode = str.charCodeAt(i);
  if (ascCode <= 122 && ascCode >= 97) {
    upperStr += String.fromCharCode(ascCode - 32);
  } else {
    upperStr += str[i];
  }
}

console.log(upperStr);





