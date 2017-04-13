"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FindSVGTags;

var _ElementManager = require("./ElementManager");

var _FilterMatchedRegex = require("./FilterMatchedRegex");

var _FilterMatchedRegex2 = _interopRequireDefault(_FilterMatchedRegex);

var _IsTextElement = require("./IsTextElement");

var _IsTextElement2 = _interopRequireDefault(_IsTextElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FindSVGTags(markup) {

  (0, _ElementManager.start)();

  var regex = /\<\/?\w+[^<>]*>/g;
  var found = null;
  do {
    found = regex.exec(markup);
    if (found) {
      var tag = found[0];
      var element = (0, _FilterMatchedRegex2.default)(tag);
      (0, _IsTextElement2.default)(element, markup, found);
      (0, _ElementManager.add)(element);
    }
  } while (found);

  return (0, _ElementManager.getFinalElement)();
}