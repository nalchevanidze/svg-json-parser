import ParseAttributes from "./ParseAttributes";

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


export default function BuildElement( elementblueprint , parent ) {
  let markup = elementblueprint.text ;
    var instance = {
        tag: markup.match(/^\w+/)[0],
        toParent: function (){  return parent; }
    };
    setAttributes( instance, markup );
    parent.children = parent.children || [];
    parent.children.push(instance);
    return instance;
}
