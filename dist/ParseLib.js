"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var ToSVGLib = function ToSVGLib(_ref) {
    var children = _ref.children;
    return children.reduce(
    // Reducer Function
    function (state, element) {
        var id = element.id;

        if (id) {
            state[id] = element;
        }
    },
    // Start State
    {});
};
var ParseLib = function ParseLib(e) {
    return ToSVGLib(parser(e));
};
exports.default = ParseLib;