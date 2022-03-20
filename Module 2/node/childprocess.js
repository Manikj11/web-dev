let cp = require('child_process');
console.log(cp)
//running calculator 
cp.execFileSync('calc');
let content  = cp.execSync("os.js ")

console.log("content of another file"+ content);

cp.execFileSync('chrome');