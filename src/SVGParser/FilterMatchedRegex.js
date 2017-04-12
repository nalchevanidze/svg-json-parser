export default function FilterMatchedRegex (e) {
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