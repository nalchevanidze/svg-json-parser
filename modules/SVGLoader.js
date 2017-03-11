var parser = require("./SVGParser");

const fs = require('fs');
function ToSVGLib(e) {
    var a = {};
    e.children.forEach((e) => {
        if (e.id) {
            a[e.id] = e;
        }
    });
    return a;
}
function LoadFile(url, callback) {
    return parser(fs.readFileSync(url, 'utf8'));
}
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
function LoadLib(url, callback) {
    return ToSVGLib(LoadFile(url));
}
module.exports = {
    file: LoadFile,
    folder: LoadFolder,
    lib: LoadLib
}
