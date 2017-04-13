import { start , add , getFinalElement} from "./ElementManager";
import FilterMatchedRegex from "./FilterMatchedRegex";
import IsTextElement from "./IsTextElement";

export default function FindSVGTags (markup) {

    start();
    
    let regex = /\<\/?\w+[^<>]*>/g
    let found = null;
     do {
       found = regex.exec(markup);
       if(found){
         let tag = found[0];
         let element = FilterMatchedRegex(tag);
         IsTextElement(element, markup , found );
         add(element);
       }
     } while(found)
     
    return getFinalElement();
}
