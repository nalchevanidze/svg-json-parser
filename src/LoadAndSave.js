var Saver = require("./SaveObject");
var SVGLoader = require("./SVGLoader");
function LoadSave(type, path, spath) {
    Saver(spath, SVGLoader[type](path));
}
module.exports = {
    folder: function(l, s) {
        LoadSave("folder", l, s)
    },
    file: function(l, s) {
        LoadSave("file", l, s)
    },
    lib: function(l, s) {
        LoadSave("lib", l, s)
    }
}
