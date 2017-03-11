
const parser = require("./index");


var svg = parser.load.file('./SVGLib/icon.svg');

svg = JSON.parse(JSON.stringify(svg));

 parser.json.file('./SVGLib/icon.svg','./SVGLib/icon');

console.log(svg);
