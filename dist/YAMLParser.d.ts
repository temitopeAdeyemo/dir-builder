/**
 * Utility class for parsing YAML strings into JavaScript objects.
 * Provides a method to convert YAML formatted text into a nested JavaScript object structure.
 */
export declare class YAMLParser {
    /**
     * Parses a YAML string and converts it into a JavaScript object.
     *
     * This method processes the YAML formatted string line-by-line, taking into account indentation
     * levels and YAML syntax to construct a nested object structure. It supports basic YAML features such
     * as lists, nested objects, and key-value pairs. Comments and blank lines are ignored during parsing.
     *
     * @param yamlString - A string containing YAML formatted data.
     *
     * @returns A JavaScript object representing the parsed YAML data.
     *
     * @throws Error if the YAML data is malformed or cannot be processed.
     */
    static parseYAML(yamlString: string): Record<string, any>;
}
