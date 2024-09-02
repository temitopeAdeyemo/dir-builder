import { readFileSync } from 'fs';
import { YAMLParser } from './YAMLParser';

/**
 * Utility class for converting YAML data to JSON format.
 * Provides methods to parse YAML strings or files and convert them to JSON.
 */
export class JsonGenerator {
  /**
   * Converts a YAML string or file to a JSON string.
   *
   * This method can handle both direct YAML strings and file paths. If the `isPath`
   * parameter is set to `true`, it treats `yamlString` as a file path and reads the
   * YAML content from that file. Otherwise, it assumes `yamlString` is the YAML content
   * itself. The method parses the YAML data and returns it as a formatted JSON string.
   *
   * @param yamlString - A string containing YAML data or a file path to a YAML file.
   * @param isPath - A boolean flag indicating if `yamlString` is a file path (`true`)
   *                 or YAML content (`false`). Defaults to `false`.
   *
   * @returns A formatted JSON string representing the parsed YAML data.
   *
   * @throws Error if the YAML data cannot be parsed or if there is an issue reading the file.
   */
  public static jsonFromYAML(yamlString: string, isPath = false): string {
    if (isPath) yamlString = readFileSync(yamlString, { encoding: 'utf8' });

    const parsed = YAMLParser.parseYAML(yamlString);
    return JSON.stringify(parsed, null, 2);
  }
}
