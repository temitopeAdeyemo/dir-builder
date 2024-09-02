/**
 * Utility class for processing YAML files and generating directory structures.
 * Provides functionality to convert a YAML file into a directory structure on the filesystem.
 */
export declare class YAMLProcessor {
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
    static processYAMLFile(yamlFilePath: string, basePath: string): Promise<void>;
}
