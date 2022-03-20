let fs =require("fs")
//console.log(fs);

//created file path
let path = require("path")
let filePath = path.join(__dirname,"text.txt");
console.log(filePath);

//create new  file in that filepath if not exist 
fs.writeFileSync(filePath,"Hello I am a text file created and this is the content that goes inside")
fs.writeFileSync(filePath,"writing again") //overrides ths previous content




