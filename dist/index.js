"use strict";

var _SVGLoader = require("./SVGLoader");

var _SVGLoader2 = _interopRequireDefault(_SVGLoader);

var _LoadAndSave = require("./LoadAndSave");

var _LoadAndSave2 = _interopRequireDefault(_LoadAndSave);

var _SVGParser = require("./SVGParser");

var _SVGParser2 = _interopRequireDefault(_SVGParser);

var _ParseLib = require("./ParseLib");

var _ParseLib2 = _interopRequireDefault(_ParseLib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    load: _SVGLoader2.default,
    json: _LoadAndSave2.default,
    parse: _SVGParser2.default,
    parseLib: _ParseLib2.default
};