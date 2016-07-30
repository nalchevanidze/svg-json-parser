// Auhtor: David Nalchevanidze
// Version: 0.6
// Valide Shape elements || circle,ellipse,line,path,polygon,polyline,rect
// Valide Structural elements || defs,g,svg,symbol
//  It's really useful for React.
var SVGToJSON = new SVGJSONParser ();
function SVGJSONParser (){
  var shapes = {
    path:["d"],
    polygon:["points"],
    polyline:["points"],
    line:['x1','y1','x2','y2'],
    ellipse:['cx','cy','rx','ry'],
    circle:['cx','cy','r'],
    rect:['x','y','width',"height","rx","ry"]
  }
  var validElemenst = "circle,ellipse,line,path,polygon,polyline,rect,defs,g,svg,symbol";
  function attr (a,b,name){if(b.getAttribute(name)){ a[name]=b.getAttribute(name)}};
  function attrList (a,b,lib){ lib.forEach(function(i){attr(a,b,i)})};
  function parse (d){
      function checknode(e){ if(validElemenst.indexOf(e.nodeName) != -1){ a.children.push(parse(e));}}
      var nd = d.nodeName;
      var a= {node:nd}; 
      if(d.id){a.id = d.id};
      attrs = ['fill',"stroke",'stroke-width'];
      if(shapes[nd]){attrs = attrs.concat(shapes[nd]);}
      attrList(a,d,attrs);
      if(d.childNodes.length){a.children=[];[].forEach.call(d.childNodes,checknode);}
      return a;
  }
  function reactLib (d){
      var a = {};
      var c = 0 ;
      if(d && (d.nodeName == "svg" || d.nodeName == "defs")  ){
        function checknode(e){ 
        if(validElemenst.indexOf(e.nodeName) != -1){ if(e.id){ a[e.id]=parse(e); c++;} }
        }
        if(d.childNodes.length){[].forEach.call(d.childNodes,checknode);}
        if(c <1){ throw new Error("Not found any valid SVG Element, check if thay have ID's;"); }
      }else{
        { throw new Error('Input Element is not "svg" or "defs" type;'); }
      }
      return a;
  }
  this.parse = function (d){ return parse(d); };
  this.json = function(d){ return JSON.stringify(parse(d)) }
  this.lib = function(d) {return reactLib(d); }
  this.jsonlib = function(d) {return JSON.stringify(reactLib(d)); }
}
