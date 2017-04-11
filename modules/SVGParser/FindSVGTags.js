const ElementManager = require("./ElementManager");

function reworkFounded (e) {
    var text = e.slice(1, -1);
    var output = {
        text: text,
        type: 'open'
    };
    if (text[0] === "/") {
        output.type = "close";
        output.tag = text.slice(1);
    } else {
        output.tag = text.match(/^\w+/)[0];
        if (text[text.length - 1] === "/") {
            output.type = "selfclose";
        }
    }
    return output;
}

module.exports = function FindSVGTags (markup) {
    var regex = /\<\/?\w+[^<>]*>/g
    var array = [];
    var found = null;
    let savedTextIndex = 0 ;
     do {
       found = regex.exec(markup);
       if(found){
         let tag = found[0];
      //   console.log(tag);
         let element = reworkFounded(tag);
         
         if(element.tag === "text"){
           if(element.type === "open"){
             savedTextIndex = found[0].length + found.index;
           }else{
             let textInput = markup.slice(savedTextIndex , found.index ).trim();
             element.children = textInput;
           }
         }

         ElementManager.add(element);
       }
     } while(found)

    return ElementManager.getFinalElement();
}
