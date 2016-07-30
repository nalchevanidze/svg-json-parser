# svg-json-parser

this App Converts SVG Element to JSON Format. it is useful for React SVG icons.

<h4>Create instance of this Class:</h4>
```html
var svgParser = new SVGJSONParser();
```

<h6> to parse SVG: </h6>
```html

svgParser.parse(document.querySelector('#svglib'));

// for json use: svg.json( .....

```
<h6>converted Object</h6>
```html

{"node":"g",id:work,children:[{node:"path",d:"M10..",fill=".."},.....]}

```

<h6>Valid elements:</h6>
```html

Shape: <circle>, <ellipse>, <line>, <path>, <polygon>, <polyline>, <rect>

Structural: <defs>, <g>, <svg>, <symbol>,<svg>

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
