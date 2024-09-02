import { DirectoryManager } from './DirectoryManager';

/**
 * Utility class for generating file systems from JSON definitions.
 * Provides methods to create a directory structure based on a JSON string.
 */
export class FileSystemGenerator {
  /**
   * Creates a directory structure from a JSON string.
   *
   * This method parses the provided JSON string to a JavaScript object and
   * uses the `DirectoryManager` class to create the directory structure as
   * defined by the parsed object.
   *
   * @param basePath - The base path where the directory structure should be created.
   * @param jsonString - A JSON string representing the folder and file structure.
   *                     The JSON string should define the structure with keys for directory or file names,
   *                     and values specifying file contents or nested structures.
   *
   * @throws Error if the JSON string cannot be parsed or if there is an issue with the directory creation.
   */

  public static createFromJSON(basePath: string, jsonString: string) {
    const structure = JSON.parse(jsonString);
    DirectoryManager.createStructure(basePath, structure);
  }
}
