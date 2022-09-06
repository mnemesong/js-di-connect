"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recursiveSearch = void 0;
var fs = require("fs");
var path = require("path");
var isDiChecker = require("./is-di-checker");
function recursiveSearch(folderPath) {
    var readdir = fs.readdirSync(folderPath, 'utf-8');
    var results = [];
    for (var i = 0; i < readdir.length; i++) {
        var itemFullPath = path.resolve(folderPath, readdir[i]);
        if (fs.statSync(itemFullPath).isDirectory()) {
            results = results.concat(recursiveSearch(itemFullPath));
        }
        else {
            if (isDiChecker.isFileDiConfig(readdir[i])) {
                results.push(itemFullPath);
            }
        }
    }
    return results;
}
exports.recursiveSearch = recursiveSearch;
