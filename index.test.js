
const parser = require("./index");
const fs = require('fs');

 var folder = parser.load.folder("icons");

 fs.writeFile("icons.json", JSON.stringify(folder, null, 2), function(err) {
        if (err) {
            return console.log(err);
        };
});
