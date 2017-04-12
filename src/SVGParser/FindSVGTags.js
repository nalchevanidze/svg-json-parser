import ElementManager from "./ElementManager";
import FilterMatchedRegex from "./FilterMatchedRegex";
import IsTextElement from "./IsTextElement";

export default function FindSVGTags (markup) {
    var regex = /\<\/?\w+[^<>]*>/g
    var found = null;
     do {
       found = regex.exec(markup);
       if(found){
         let tag = found[0];
         let element = FilterMatchedRegex(tag);
         IsTextElement(element, markup , found );
         ElementManager.add(element);
       }
     } while(found)

    return ElementManager.getFinalElement();
}
