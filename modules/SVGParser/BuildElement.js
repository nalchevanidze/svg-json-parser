const ParseAttributes = require("./ParseAttributes");

function setAttributes(object, markup) {
    var attr = ParseAttributes( markup , object.tag );
    if (attr) {
        object.attr = attr;
        if (attr.id) {
            object.id = attr.id;
            delete attr.id;
        }
    }
}


module.exports = function BuildElement(eleMarkup, parent) {

    var instance = {
        tag: eleMarkup.match(/^\w+/)[0],
        toParent: function (){  return parent; }
    };
    setAttributes(instance, eleMarkup);

    parent.children = parent.children || [];
    parent.children.push(instance);

    return instance;
}
