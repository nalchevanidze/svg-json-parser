# svg-json-parser
Converts SVG to JSON Format. it is useful for React SVG icons.

for use you must create instance of this Class:
```html
var svgParser = new SVGJSONParser();
```

<h4> to parse SVG: </h4>
```html

svgParser.parse(document.querySelector('#svglib'));

// for json use: svg.json( .....

```
<h6>converted Object</h6>
```html

{"node":"g",id:work,children:[{node:"path",d:"M10..",fill=".."},.....]}

```

<h3>Valid elements that will be converterd:</h3>
```html

Shape elements
---------------------------
<circle>, <ellipse>, <line>, <path>, <polygon>, <polyline>, <rect>

Structural elements
----------------------------
<defs>, <g>, <svg>, <symbol>,<svg>

```
if you use method lib returns;
```html
<svg id="svglib">
    <g id="work">
        <path d="M0..." />
        <path d="M0..." />
    </g>
    <path id="gmail" d="M0..." />
    .......
</svg>

var svglib = svgParser.lib(document.querySelector('#svglib'));

{  
  "work":{  
    "node":"g",
    "id":"work",
    "children":[  
      {"node":"path","d":"M0..."},
      {"node":"path","d":"M0..."}
    ]
  },
  "gmail":{  
    "node":"path",
    "id":"gmail",
    "d":"M10..."
  },.....
}
```
