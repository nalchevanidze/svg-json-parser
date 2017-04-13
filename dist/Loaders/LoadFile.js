'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = LoadFile;

var _SVGParser = require('../SVGParser');

var _SVGParser2 = _interopRequireDefault(_SVGParser);

var _fs = require('fs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LoadFile(url, callback) {
    var loadedSvg = (0, _SVGParser2.default)((0, _fs.readFileSync)(url, 'utf8'));
    console.log("SVGPARSER->LoadFile:", url);
    return loadedSvg;
}