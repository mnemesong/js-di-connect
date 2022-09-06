"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFileDiConfig = void 0;
function isFileDiConfig(str) {
    return (str.match(/^.*\.di.json$/) !== null);
}
exports.isFileDiConfig = isFileDiConfig;
