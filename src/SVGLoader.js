import LoadFile from "./Loaders/LoadFile.js";
import fs from 'fs';


function LoadFolder(url, callback) {
    var data = {};
    var list = fs.readdirSync('./' + url).filter((n) => {
        return !!n.match(/\.svg$/);
    });
    list.forEach((name, i) => {
        var last = (i == list.length - 1);
        data[name.split(".")[0].replace("-", "_")] = LoadFile('./' + url + "/" + name);
    })
    return data;
}

module.exports = {
    file: LoadFile,
    folder: LoadFolder,
}
