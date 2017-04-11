const FindSVGTags = require('./FindSVGTags');
function convert_svg(markup) { return FindSVGTags(markup); }
module.exports = convert_svg;
