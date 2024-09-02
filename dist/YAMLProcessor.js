"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YAMLProcessor = void 0;
const fs = require("fs");
const _1 = require(".");
const Prompter_1 = require("./Prompter");
/**
 * Utility class for processing YAML files and generating directory structures.
 * Provides functionality to convert a YAML file into a directory structure on the filesystem.
 */
class YAMLProcessor {
    /**
     * Reads a YAML file, converts it to JSON format, and creates a corresponding directory structure.
     *
     * This method performs the following steps:
     * 1. Reads the contents of the specified YAML file.
     * 2. Converts the YAML data into a JSON string using the `JsonGenerator` class.
     * 3. Creates a directory structure based on the JSON data using the `FileSystemGenerator` class.
     *
     * @param yamlFilePath - The file path of the YAML file to be processed.
     * @param basePath - The base path where the directory structure should be created.
     *
     * @throws Error if the YAML file cannot be read, if the conversion to JSON fails, or if the directory
     *         structure creation encounters an issue.
     */
    static processYAMLFile(yamlFilePath, basePath) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Prompter_1.Prompter.init(basePath);
            const yamlData = fs.readFileSync(yamlFilePath, 'utf8');
            const jsonString = _1.JsonGenerator.jsonFromYAML(yamlData);
            _1.FileSystemGenerator.createFromJSON(basePath, jsonString);
            console.log('Folder structure created successfully.');
        });
    }
}
exports.YAMLProcessor = YAMLProcessor;
//# sourceMappingURL=YAMLProcessor.js.map