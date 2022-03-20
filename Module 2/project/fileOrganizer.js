let fs = require("fs");
let path = require("path");

let folderPath = process.argv[2]; //task 1 
//console.log(folderPath)

let folderExists = fs.existsSync(folderPath);
let extensions= {
    Audio: ['.mp3'],
    Video:[".mp4",".mkv"],
    Document:[".doc",".xlsx",".pdf",".ppt",".txt"],
    Image:[".jpeg",".png",".jpg",".gif"],
    Software:[".exe",".apk"]
}

if(folderExists){
    let files = fs.readdirSync(folderPath); //task 2
    //console.log(files)
    for(let i=0;i<files.length;i++){
        let ext = path.extname(files[i]);
        let nameoffolder = giveFolderName(ext);
       // console.log("ext--",ext," Folder-- ",nameoffolder)
        let pathofFolder = path.join(folderPath,nameoffolder);
        let exist = fs.existsSync(pathofFolder);
        if(exist){
            moveFile(folderPath,pathofFolder,files[i]);
        }
        else{
            fs.mkdirSync(pathofFolder);
            moveFile(folderPath,pathofFolder,files[i]);
        }
    }
}

else{
    console.log("!!! Please enter a valid Path !!!");
}

function giveFolderName(ext){
    for(let key in extensions){
        let extarr = extensions[key];
        for(let i=0;i<extarr.length;i++){
            if(extarr[i]==ext){
                 return key;
            }

        }

    }
    return "Others";
}

function moveFile(folderPath,pathofFolder,fileName){
    let srcpath = path.join(folderPath,fileName);
    let destpath = path.join(pathofFolder,fileName);
    fs.copyFileSync(srcpath,destpath);
    fs.unlinkSync(srcpath);
}