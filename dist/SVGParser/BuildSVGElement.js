"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = BuildSVGElement;

var _ElementManager = require("./ElementManager");

function BuildSVGElement(tagsArray) {
    tagsArray.forEach(function (object) {
        if (object.type === "open" || object.type === "selfclose") {
            (0, _ElementManager.openTag)(object);
            if (object.type === "selfclose") (0, _ElementManager.closeTag)(object);
        } else {
            (0, _ElementManager.closeTag)(object);
        }
    });
    return (0, _ElementManager.getFinalElement)();
}