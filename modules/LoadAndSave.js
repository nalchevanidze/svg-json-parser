var Saver = require("./SaveObject");
var SVGLoader = require("./SVGLoader");
function LoadSave (type,path,spath){SVGLoader[type](path,(e)=>{ Saver(spath,e);})}
module.exports = {
  folder: function(l,s){LoadSave("folder",l,s)},
  file: function(s,s){LoadSave("file",l,s)},
  lib: function(l,s){LoadSave("lib",l,s)},
}
