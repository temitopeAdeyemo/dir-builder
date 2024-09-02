"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectoryManager = void 0;
const fs = require("fs");
const path = require("path");
/**
 * Utility class for managing directory structures.
 * Provides methods to create a directory structure based on a given definition.
 */
class DirectoryManager {
    /**
     * Creates a directory structure based on the provided structure object.
     *
     * This method recursively creates directories and files as specified by the `structure` object.
     * - Directories are created for keys that do not contain a period (`.`).
     * - Files are created for keys that contain a period (`.`) with the corresponding content.
     * - If the value associated with a key is `null`, it creates an empty directory.
     * - If the value is an object (not an array), it further processes the nested structure.
     * - If the value is a string, it writes that string content to the file.
     *
     * @param basePath - The base path where the directory structure should be created.
     * @param structure - A nested object representing the folder and file structure.
     *                    Keys represent directory or file names, and values specify file contents or nested structures.
     */
    static createStructure(basePath, structure) {
        for (const [key, value] of Object.entries(structure)) {
            const fullPath = path.join(basePath, key);
            if (key.includes('.')) {
                const content = value !== null ? String(value) : '';
                fs.writeFileSync(fullPath, content, 'utf8');
            }
            else if (value === null || (typeof value === 'object' && !Array.isArray(value))) {
                fs.mkdirSync(fullPath, { recursive: true });
                if (value) {
                    DirectoryManager.createStructure(fullPath, value);
                }
            }
            else {
                fs.writeFileSync(fullPath, value, 'utf8');
            }
        }
    }
}
exports.DirectoryManager = DirectoryManager;
//# sourceMappingURL=DirectoryManager.js.map