# svg-json-parser
Converts SVG to JSON Format. it is useful for React SVG icons.

for use you must create instance of this Class:
```html
var svgParser = new SVGJSONParser();
```

<h4> to parse SVG: </h4>
```html

svgParser.parse(document.querySelector('#svglib'));

```
<h5>converted Object</h5>
```html

{"node":"g",id:work,children:[{node:"path",d:"M10..",fill=".."},.....]}

```

<p>for JSON </p>
```html

svgParser.json(document.querySelector('#svglib'));

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
        <path d="M10 10h20v20H10V10zm30" />
        <path d="M10 10h20v20H10V10zm30" />
    </g>
    <path id="gmail" d="M10 10h20v20H10V10zm30" />
    <path id="mobile" d="M10 10h20v20H10V10zm30" />
</svg>
<script>
var svglib = svgParser.lib(document.querySelector('#svglib'));
</script>
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
