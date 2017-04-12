"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IsTextElement;
var savedTextIndex = 0;

function IsTextElement(element, markup, currentRegex) {
  if (element.tag === "text") {
    if (element.type === "open") {
      savedTextIndex = currentRegex[0].length + currentRegex.index;
    } else {
      var textInput = markup.slice(savedTextIndex, currentRegex.index).trim();
      element.children = textInput;
    }
  }
}