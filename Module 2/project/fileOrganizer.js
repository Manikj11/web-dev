let fs = require("fs");

let folderPath = process.argv[2];
console.log(folderPath)

let folderExists = fs.existsSync(folderPath);

if(folderExists){
    let files = fs.readdirSync(folderPath);
    console.log(files)
}
else{
    console.log("!!! Please enter a valid Path !!!");
}
