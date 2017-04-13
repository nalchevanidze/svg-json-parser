'use strict';

var _LoadFile = require('./Loaders/LoadFile.js');

var _LoadFile2 = _interopRequireDefault(_LoadFile);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LoadFolder(url, callback) {
    var data = {};
    var list = _fs2.default.readdirSync('./' + url).filter(function (n) {
        return !!n.match(/\.svg$/);
    });
    list.forEach(function (name, i) {
        var last = i == list.length - 1;
        data[name.split(".")[0].replace("-", "_")] = (0, _LoadFile2.default)('./' + url + "/" + name);
    });
    return data;
}

module.exports = {
    file: _LoadFile2.default,
    folder: LoadFolder
};