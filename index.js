var SVGLoader = require("./modules/SVGLoader");
var jsonSaver = require("./modules/LoadAndSave");
var parser = require("./modules/SVGParser");
function ToSVGLib(e) {
    var a = {};
    e.children.forEach((e) => {
        if (e.id) {
            a[e.id] = e;
        }
    });
    return a;
}
function parseLib(e) {
    return ToSVGLib(parser(e));
}
var app = {
    load: SVGLoader,
    json: jsonSaver,
    parse: parser,
    parseLib: parseLib
};
module.exports = app;
