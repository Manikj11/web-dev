//"D:\FJP-6\Module 2\node\path.js"
let path = require("path");
//console.log(path);

let extension = path.extname(" D:\FJP-6\Module 1\index.html");
console.log(extension);
let filename = path.basename("D:/FJP-6/Module 2/node/path.js");
console.log(filename);
console.log(__filename);
console.log(__dirname);

//creating a new file Path not file -- directory path + name of file
let newFilePath = path.join(__dirname,"test.js");
console.log(newFilePath);


