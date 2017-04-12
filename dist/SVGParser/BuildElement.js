"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = BuildElement;

var _ParseAttributes = require("./ParseAttributes");

var _ParseAttributes2 = _interopRequireDefault(_ParseAttributes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setAttributes(object, markup) {
    var attr = (0, _ParseAttributes2.default)(markup, object.tag);
    if (attr) {
        object.attr = attr;
        if (attr.id) {
            object.id = attr.id;
            delete attr.id;
        }
    }
}

function BuildElement(elementblueprint, parent) {
    var markup = elementblueprint.text;
    var instance = {
        tag: markup.match(/^\w+/)[0],
        toParent: function toParent() {
            return parent;
        }
    };
    setAttributes(instance, markup);
    parent.children = parent.children || [];
    parent.children.push(instance);
    return instance;
}