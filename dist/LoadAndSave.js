"use strict";

var Saver = require("./SaveObject");
var SVGLoader = require("./SVGLoader");
function LoadSave(type, path, spath) {
    Saver(spath, SVGLoader[type](path));
}
module.exports = {
    folder: function folder(l, s) {
        LoadSave("folder", l, s);
    },
    file: function file(l, s) {
        LoadSave("file", l, s);
    },
    lib: function lib(l, s) {
        LoadSave("lib", l, s);
    }
};