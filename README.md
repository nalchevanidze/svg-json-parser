# svg-json-parser

this App Converts SVG Element to JSON.


```html

npm install svg-json-parser;

var app = require("svg-json-parser");

app.json.file('lib.svg','Output file path Without .json');
```

<h6>converted Object</h6>
```html

{
  node:"svg",
  id:"svglib",
  children:[
    {"node":"g",id:apple,children:[{node:"path",attr:{d:"M10..",fill="red"}},.....]},
    {"node":"path",id:orange,attr:{fill="#FF3456"}},
    .....
  ]
}
```
<h6>lib method </h6>

returns SVG elements as the properties of the object, will be included only elements with ID attribute; only direct children need id Attributes. and can be passed only: SVG or SVG "defs" element.

```html
<svg>
  // it not, no id  <path  d="M0..." />
    <g id="work">
        <path d="M0..." />
        <path d="M0..." />
    </g>
    <path id="gmail" d="M0..." />
    .......
</svg>

var  svglib = svgParser.json.lib('lib.svg','Output file path Without .json');
{
  work:{
    node:"g",
    id:"work",
    children:[
      {"node":"path",attr{"d":"M0..."}},
      {"node":"path",attr{"d":"M0..."}}
    ]
  },
  gmail:{
    node:"path",
    id:"gmail",
    attr{"d":"M0..."}}
  },.....
}
```
<h6>you can use lib object in react:</h6>

```html

class Icon extends React.Component {
  render(){
    var s = svglib[this.props.id];
    if(s.node=="g"){return (<g >{sv.children.map((e,i)=><path  d={e.d} fill={e.fill} key={i} ></path>)}</g>);}
    else if(s.node=="path"){return (<path  d={s.d} fill={s.fill} ></path>);}
  }
}

<Icon id='work' />

```
