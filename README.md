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
<h6>lib method </h6> 

returns SVG elements as the properties of the object, will be included only elements with ID attribute; only direct children need id Attributes. and can be passed only: SVG or SVG "defs" element.

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

var  svglib = svgParser.lib(document.querySelector('#svglib'));

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
you can use lib object in react:

```html

var Icon = React.createClass({render(){
  var s = svglib[this.props.id];
  if(s.node=="g"){return (
    <g >
      {sv.children.map((e,i)=>
        <path  d={e.d} fill={e.fill} key={i} ></path>
      )}
    </g>
  );}
  else if(s.node=="path"){return(
    <path  d={s.d} fill={s.fill} ></path>
  );}
}});

<icon id='work' />

```
