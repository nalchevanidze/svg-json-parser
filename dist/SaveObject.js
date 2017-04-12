"use strict";

var fs = require('fs');
module.exports = function (url, file) {
    fs.writeFile(url + ".json", JSON.stringify(file, null, 2), function (err) {
        if (err) {
            return console.log(err);
        };
        console.log("The file was Saved!");
    });
};