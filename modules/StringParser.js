function toPerent(a){var i = a.p ;delete a.p;return i;}
function get_attr(e){  attr = null ; var at = e.match(/\S+=\"[^\"]+/g);
  if(at){ attr = {};at.forEach(function(att){
    var inn=att.split('="');
    attr[inn[0].replace("-","_")] = inn[1].replace(/'|"/g,"\"");
  })}
  return attr;
}
function convert_svg(text){
  var result = text.match(/\<\/?\w+[^<>]*>/g);
  var stage = {node:'main',children:[],p:null};
  var a = stage ;
  result.forEach(function(e,i){
    e = e.slice(1,-1);
      if(e[0] !== "/"){
      var ins = {node:e.match(/^\w+/)[0],p:a};
      var attr = get_attr(e);
      if(attr){ins.attr = attr;if(attr.id){ ins.id = attr.id; delete attr.id ;}}
       a.children=a.children||[];  a.children.push(ins); a = ins;
       if(e[e.length-1] == "/"){a = toPerent(a);}
     }else if(e.slice(1) == a.node){a = toPerent(a);}else{console.error(a.node,e);}
  })
  stage = stage.children[0] ;
  return stage ;
}
exports.parse  =  convert_svg ;
