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
     * @param yamlFilePath - The file path of the YAML file to be processed.
     * @param outDir - The base path where the directory structure should be created.
     * @param isPath - A boolean flag indicating if yamlFilePathOrSting is a file path (true) or YAML content (false). Defaults to false.
     *
     * @throws Error if the YAML file cannot be read, if the conversion to JSON fails, or if the directory
     *         structure creation encounters an issue.
     */
    static processYAMLFile(yamlFilePathOrSting_1, outDir_1) {
        return __awaiter(this, arguments, void 0, function* (yamlFilePathOrSting, outDir, isPath = false) {
            let yamlData;
            if (isPath) {
                yield Prompter_1.Prompter.init(outDir);
                yamlData = fs.readFileSync(yamlFilePathOrSting, 'utf8');
            }
            else
                yamlData = yamlFilePathOrSting;
            const jsonString = _1.JsonGenerator.jsonFromYAML(yamlData);
            _1.FileSystemGenerator.createFromJSON(jsonString, outDir);
            console.log('Folder structure created successfully.');
        });
    }
}
exports.YAMLProcessor = YAMLProcessor;
//# sourceMappingURL=YAMLProcessor.js.map