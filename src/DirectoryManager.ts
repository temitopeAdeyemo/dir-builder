import * as fs from "fs";
import * as path from "path";

export class DirectoryManager {
  public static createStructure(basePath: string, structure: Record<string, any>) {
    // console.log("---- ",structure);
    for (const [key, value] of Object.entries(structure)) {
      const fullPath = path.join(basePath, key);

      if (key.includes('.')) {
        // Treat keys with "." as files, even if value is null
        const content = value !== null ? String(value) : '';
        fs.writeFileSync(fullPath, content, "utf8");
      } else if (value === null || (typeof value === "object" && !Array.isArray(value))) {
        // If value is null or an object, treat it as a directory
        fs.mkdirSync(fullPath, { recursive: true });
        if (value) {
          DirectoryManager.createStructure(fullPath, value);
        }
      } else {
        // If value is not null and is a string, treat it as file content
        console.log("-----",value,"::::::::::::::::::::::::;", fullPath);
        fs.writeFileSync(fullPath, value, "utf8");
      }
    }
  }
}
