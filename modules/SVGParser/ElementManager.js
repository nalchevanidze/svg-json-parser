const BuildElement =require("./BuildElement");
const stage = {
        tag: 'main',
        children: [],
        p: null
};
let current = stage;

const ElementManager =  {
  getFinalElement (){
    return stage.children[0];
  },
  openTag (object){
        current  = BuildElement( object , current );
  },
  closeTag(object){
         if(object.tag !== current.tag)  throw new Errow ( " tag is not equal to ; "+ object.text );

         if( object.tag === "text" && object.children){
           console.log(object);
           if( typeof object.children === "string"){
             current.children = object.children ;
             console.log(object);
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
