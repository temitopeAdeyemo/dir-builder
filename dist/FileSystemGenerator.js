"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileSystemGenerator = void 0;
const DirectoryManager_1 = require("./DirectoryManager");
class FileSystemGenerator {
    static createFromJSON(basePath, jsonString) {
        const structure = JSON.parse(jsonString);
        DirectoryManager_1.DirectoryManager.createStructure(basePath, structure);
    }
}
exports.FileSystemGenerator = FileSystemGenerator;
//# sourceMappingURL=FileSystemGenerator.js.map