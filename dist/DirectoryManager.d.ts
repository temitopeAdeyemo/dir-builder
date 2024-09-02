/**
 * Utility class for managing directory structures.
 * Provides methods to create a directory structure based on a given definition.
 */
export declare class DirectoryManager {
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
    static createStructure(basePath: string, structure: Record<string, any>): void;
}
