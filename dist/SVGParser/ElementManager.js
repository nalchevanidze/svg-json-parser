"use strict";

var _BuildElement = require("./BuildElement");

var _BuildElement2 = _interopRequireDefault(_BuildElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stage = {
  tag: 'main',
  children: [],
  p: null
};

var current = stage;

var ElementManager = {
  getFinalElement: function getFinalElement() {
    return stage.children[0];
  },
  openTag: function openTag(object) {
    current = (0, _BuildElement2.default)(object, current);
  },
  closeTag: function closeTag(_ref) {
    var tag = _ref.tag,
        children = _ref.children;

    if (tag !== current.tag) throw new Errow(" tag is not equal to ; " + object.text);

    if (tag === "text" && children) {
      if (typeof children === "string") {
        current.children = children;
      } else {
        throw new Error("text element input must be String");
      }
    }

    current = current.toParent();
  },
  currentTag: function currentTag() {
    return current.tag;
  }
};

ElementManager.add = function ElementManagerAdd(object) {
  if (object.type === "open" || object.type === "selfclose") {
    ElementManager.openTag(object);
    if (object.type === "selfclose") ElementManager.closeTag(object);
  } else {
    ElementManager.closeTag(object);
  }
};

module.exports = ElementManager;