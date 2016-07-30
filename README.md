# svg-json-parser
Converts SVG to JSON Format. it is useful for React SVG icons.

for use you must create instance of this Class:
```html
var svg = new SVGJSONParser();
```

to parse SVG use function parse, returns javascriptObject;
```html

svg.parse(document.querySelector('#svglib'));

```
for JSON 
```html

svg.json(document.querySelector('#svglib'));

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

var svglib = svg.lib(document.querySelector('#svglib'));
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
