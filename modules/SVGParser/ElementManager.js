const BuildElement =require("./BuildElement");

const ElementManager =  {
    stage: {
            tag: 'main',
            children: [],
            p: null
    },
    current: null
  }
ElementManager.current = ElementManager.stage ;
ElementManager.getFinalElement = function(){
  return ElementManager.stage.children[0];
}
ElementManager.openTag = function ( text ){
      ElementManager.current  = BuildElement(
        text ,
        ElementManager.current
      );
}
ElementManager.closeTag = function (){
      ElementManager.current  = ElementManager.current.toParent();
}

module.exports = ElementManager;
