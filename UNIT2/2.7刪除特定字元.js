/*
  例如給一段字串，並且指定一個不想要的字，輸出結果是要將該字刪除後的字串
  例如 'petter' 不想要  'p' ， 輸出結果是 'etter'  
*/

const str = 'petter';
const ignoreChar = 'p';
let result = '';

for (let i = 0; i < str.length; i++) {
  if (str[i] !== ignoreChar) {
    result += str[i];
  }
}

console.log(result);