const FindSVGTags = require('./FindSVGTags');
const manager = require("./ElementManager");

function buildSVG (tagsArray){
  tagsArray.forEach(function(object) {

      if (object.type === "open" || object.type === "selfclose" ) {
          manager.openTag(object.text);
          if (object.type === "selfclose") {
              manager.closeTag();
          }
      } else if (object.tag === manager.current.tag) {
          manager.closeTag();
      } else {
          throw new Errow ( " tag is not equal to ; "+ object.text );
      }
  })
  return manager.getFinalElement();
}

function convert_svg(markup) {
    const tagsArray = FindSVGTags(markup);
    return buildSVG(tagsArray);

}
module.exports = convert_svg;
