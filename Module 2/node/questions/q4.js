// read content of unorganised folder and make  an array which has extension name of each file
let path = require("path")
let fs = require("fs")

let content = fs.readdirSync("unorganised");
//console.log(content.length)
let exarr=[]
for(let i=0;i<content.length;i++){
    let name = content[i]
    let ext = path.extname(name)
    exarr.push(ext)
}

console.log(exarr)
