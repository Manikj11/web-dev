//move a file
let fs = require("fs")
let path = require("path")

let src = path.join(__dirname,"move.txt");
let dest = path.join(__dirname,"foldernew","movetxt")
fs.copyFileSync(src,dest)

fs.unlinkSync(src) //deleting from source 