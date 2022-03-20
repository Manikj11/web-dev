//make a folder inside same directory and in that folder make a text file with a content

let path = require("path")
let fs = require("fs")

dir="D:/FJP-6/Module 2/node/questions/foldernew"
if( !fs.existsSync(dir)){
    fs.mkdirSync("foldernew")
}

let fn = path.join(__dirname,"foldernew","from1.txt")
fs.writeFileSync(fn,"New text file created inside foldernew ")

