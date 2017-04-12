import { openTag , closeTag , getFinalElement } from "./ElementManager";

export default function BuildSVGElement (tagsArray){
  tagsArray.forEach( object=> {
      if (object.type === "open" || object.type === "selfclose" ) {
          openTag(object);
          if (object.type === "selfclose") closeTag(object);

      } else{
          closeTag(object);
      }
  })
  return getFinalElement();
}
