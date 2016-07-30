# svg-json-parser
Converts SVG to JSON Format. it is useful for React SVG icons.

for use you must create instance of this Class:
```html
var svgParser = new SVGJSONParser();
```

to parse SVG use function parse, returns javascriptObject;
```html

svgParser.parse(document.querySelector('#svglib'));

```
for JSON 
```html

svgParser.json(document.querySelector('#svglib'));

```

Valid elements that will be converterd:

```html

Shape elements
---------------------------
<circle>, <ellipse>, <line>, <path>, <polygon>, <polyline>, <rect>

Structural elements

<defs>, <g>, <svg>, <symbol>,<svg>


```

if you use method lib returns;
```html
<svg id="svglib">
    <g id="work">
        <path d="M10 10h20v20H10V10zm30" />
        <path d="M10 10h20v20H10V10zm30" />
    </g>
    <path id="gmail" d="M10 10h20v20H10V10zm30" />
    <path id="mobile" d="M10 10h20v20H10V10zm30" />
</svg>

var svglib = svgParser.lib(document.querySelector('#svglib'));
{  
  "work":{  
    "node":"g",
    "id":"work",
    "children":[  
      {"node":"path","d":"M10 10h20v20H10V10z"},
      {"node":"path","d":"M10 10h20v20H10V10z"}
    ]
  },
  "gmail":{  
    "node":"path",
    "id":"gmail",
    "d":"M10 10h20v20H10V10z"
  },
  "mobile":{  
    "node":"path",
    "id":"mobile",
    "d":"M10 10h20v20H10V10z"
  }
}
```
