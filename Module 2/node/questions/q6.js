//read content of unorganised folder and print each file type
//for example abc.mp3 --> print Audio File
//            xyz.mp4 --> print Video File
//            fsd.jpeg -> print Image File

let fs = require("fs")
let path = require("path")

let folder = path.join(__dirname,"unorganised")
let content = fs.readdirSync(folder)

let arr =[]
for(let i=0;i<content.length;i++){
    //let name = content[i];
    let ext = path.extname(content[i])
    if(ext ==".mp3")
        arr.push("Audio file")
    else if (ext==".mp4"){
        arr.push("Video file")
    }
    else if (ext==".jpg"){
        arr.push("image file")
    }
    else if (ext==".doc"){
        arr.push("document file")
    }
    else if (ext=="xlsx"){
        arr.push("excel file")
    }
    else{
        arr.push("unknown format "+ext)
    }
}
console.log(arr)