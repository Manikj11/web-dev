let fs =require("fs")
//console.log(fs);

//created file path
let path = require("path")
let filePath = path.join(__dirname,"text.txt");
console.log(filePath);

//create new  file in that filepath if not exist --Creating C
fs.writeFileSync(filePath,"Hello I am a text file created and this is the content that goes inside")
fs.writeFileSync(filePath,"writing again") //overrides ths previous content
//reading --R
let content = fs.readFileSync(filePath,'utf-8');
console.log(content)

//updating file...where content is not overridden--U

fs.appendFileSync(filePath,"newly added content which is not overridden")
console.log("after update: "+ fs.readFileSync(filePath,'utf-8') )

//delete --D
fs.unlinkSync(filePath);

//create a directory, read, delete using fs 


fs.mkdir("./new-directory-name", function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log("New directory successfully created.")
  }
})
dir= 'D:/FJP-6/Module 2/node/new-directory-name'
fs.rmdirSync(dir)
