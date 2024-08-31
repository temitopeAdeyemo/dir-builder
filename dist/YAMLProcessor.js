"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YAMLProcessor = void 0;
const fs = require("fs");
const _1 = require(".");
class YAMLProcessor {
    static processYAMLFile(yamlFilePath, basePath) {
        const yamlData = fs.readFileSync(yamlFilePath, 'utf8');
        const jsonString = _1.JsonGenerator.jsonFromYAML(yamlData);
        _1.FileSystemGenerator.createFromJSON(basePath, jsonString);
        console.log('Folder structure created successfully.');
    }
}
exports.YAMLProcessor = YAMLProcessor;
//# sourceMappingURL=YAMLProcessor.js.map