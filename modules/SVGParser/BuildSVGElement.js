const manager = require("./ElementManager");

export default function BuildSVGElement (tagsArray){
  tagsArray.forEach( object=> {
      if (object.type === "open" || object.type === "selfclose" ) {
          manager.openTag(object);
          if (object.type === "selfclose") manager.closeTag(object);

      } else{
          manager.closeTag(object);
      }
  })
  return manager.getFinalElement();
}
