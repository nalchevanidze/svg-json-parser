let savedTextIndex = 0 ;

export default function IsTextElement( element , markup ,  currentRegex ){
   if(element.tag === "text"){
           if(element.type === "open"){
             savedTextIndex = currentRegex[0].length + currentRegex.index;
           }else{
             let textInput = markup.slice(savedTextIndex , currentRegex.index ).trim();
             element.children = textInput;
           }
    }
}