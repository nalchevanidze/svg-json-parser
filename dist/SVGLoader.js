'use strict';

var _SVGParser = require('./SVGParser');

var _SVGParser2 = _interopRequireDefault(_SVGParser);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ToSVGLib(e) {
    var a = {};
    e.children.forEach(function (e) {
        if (e.id) {
            a[e.id] = e;
        }
    });
    return a;
}
function LoadFile(url, callback) {
    return (0, _SVGParser2.default)(_fs2.default.readFileSync(url, 'utf8'));
}
function LoadFolder(url, callback) {
    var data = {};
    var list = _fs2.default.readdirSync('./' + url).filter(function (n) {
        return !!n.match(/\.svg$/);
    });
    list.forEach(function (name, i) {
        var last = i == list.length - 1;
        data[name.split(".")[0].replace("-", "_")] = LoadFile('./' + url + "/" + name);
    });
    return data;
}
function LoadLib(url, callback) {
    return ToSVGLib(LoadFile(url));
}
module.exports = {
    file: LoadFile,
    folder: LoadFolder,
    lib: LoadLib
};