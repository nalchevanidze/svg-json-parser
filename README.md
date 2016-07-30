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

{
  node:"svg",
  id:"svglib",
  children:[ 
    {"node":"g",id:apple,children:[{node:"path",d:"M10..",fill="red"},.....]},
    {"node":"path",id:orange,fill="#FF3456"}},
    .....
  ]
}
```

<h6>Valid elements:</h6>
```html

Shape: <circle>, <ellipse>, <line>, <path>, <polygon>, <polyline>, <rect>

Structural: <defs>, <g>, <svg>, <symbol>,<svg>

```
lib method returns svg elements not as Array as propertys of main object, will be included only this element that has id's;

```html
<svg id="svglib">
  // it not, no id  <path  d="M0..." />
    <g id="work">
        <path d="M0..." />
        <path d="M0..." />
    </g>
    <path id="gmail" d="M0..." />
    .......
</svg>

var svglib = svgParser.lib(document.querySelector('#svglib'));

{  
  work:{  
    node:"g",
    id:"work",
    children:[  
      {"node":"path","d":"M0..."},
      {"node":"path","d":"M0..."}
    ]
  },
  gmail:{  
    node:"path",
    id:"gmail",
    d:"M10..."
  },.....
}
```
