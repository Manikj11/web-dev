//Q. copy index.html file from module1 to a new folder inside module2 .

let path = require("path")
let fs = require("fs")

let source = path.join(__dirname,"..","..","..","Module 1","index.html");
console.log(source)

let dest = path.join(__dirname,"..","..","index.html")
console.log(dest)
fs.copyFileSync(source,dest);