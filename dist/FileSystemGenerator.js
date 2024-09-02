"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileSystemGenerator = void 0;
const DirectoryManager_1 = require("./DirectoryManager");
/**
 * Utility class for generating file systems from JSON definitions.
 * Provides methods to create a directory structure based on a JSON string.
 */
class FileSystemGenerator {
    /**
     * Creates a directory structure from a JSON string.
     *
     * This method parses the provided JSON string to a JavaScript object and
     * uses the `DirectoryManager` class to create the directory structure as
     * defined by the parsed object.
     *
     * @param jsonString - A JSON string representing the folder and file structure.
     *                     The JSON string should define the structure with keys for directory or file names,
     *                     and values specifying file contents or nested structures.
     *  @param outDir - The base path where the directory structure should be created.
     *
     * @throws Error if the JSON string cannot be parsed or if there is an issue with the directory creation.
     */
    static createFromJSON(jsonString, outDir) {
        console.log(jsonString);
        const structure = JSON.parse(jsonString);
        DirectoryManager_1.DirectoryManager.createStructure(outDir, structure);
    }
}
exports.FileSystemGenerator = FileSystemGenerator;
//# sourceMappingURL=FileSystemGenerator.js.map