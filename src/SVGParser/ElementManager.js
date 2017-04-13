import BuildElement from "./BuildElement";

let stage ,current;

const ElementManager =  {
  start(){
    stage = {
        tag: 'main',
        children: [],
        p: null
    };
    current = stage;
  },
  getFinalElement (){
    return stage.children[0];
  },
  openTag (object){
        current  = BuildElement( object , current );
  },
  closeTag({tag,children}){
         if(tag !== current.tag)  throw new Errow ( " tag is not equal to ; "+ object.text );

         if( tag === "text" && children){
           if( typeof children === "string"){
             current.children = children ;
           }else {
             throw new Error("text element input must be String");
           }
         }

         current  = current.toParent();
  },
  currentTag(){
    return current.tag;
  }
}

ElementManager.add = function ElementManagerAdd(object){
  if (object.type === "open" || object.type === "selfclose" ) {
      ElementManager.openTag(object);
      if (object.type === "selfclose") ElementManager.closeTag(object);
  } else{
      ElementManager.closeTag(object);
  }
}


module.exports = ElementManager;
