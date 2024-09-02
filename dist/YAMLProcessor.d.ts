/**
 * Utility class for processing YAML files and generating directory structures.
 * Provides functionality to convert a YAML file into a directory structure on the filesystem.
 */
export declare class YAMLProcessor {
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
    static processYAMLFile(yamlFilePathOrSting: string, outDir: string, isPath?: boolean): Promise<void>;
}
