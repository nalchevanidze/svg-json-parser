function findAttrubutes(svgMarkup,tagName) {
    var list = svgMarkup.match(/\S+=\"[^\"]+/g);
    list = sortAttrubutes(list);
    if(tagName === "svg"){
      console.log(tagName)
      list = filterSVGAttributes(list);
    }
    return list;
}
function filterSVGAttributes(list){
  return list.filter(function(e){
    return ["viewBox","width","height"].includes(e.name);
  });
}

function sortAttrubutes( rowAttrList){

  return (rowAttrList || []).map(function defineValues (attr){
    var inn = attr.split('="');
    return {
      name: inn[0],
      value: inn[1].replace(/'|"/g, "\"")
    };
  }).map(function ConvertNames (e){
    e.name = e.name.replace("-", "_");
    return e;
  })
}

function fillAttributes(rawAttributeArrys) {
    var outPut = null;
    if (rawAttributeArrys && rawAttributeArrys.length) {
        outPut = rawAttributeArrys.reduce(function(object,attribute){
          object[attribute.name] = attribute.value ;
          return object;
        },{})
    }
    return outPut;
}

function ParseAttributes(svgMarkup , tagName ) {
    var rawAttributes = findAttrubutes(svgMarkup , tagName );
    return fillAttributes(rawAttributes);
}

module.exports = ParseAttributes;
