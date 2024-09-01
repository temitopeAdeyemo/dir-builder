import * as fs from "fs";
import * as path from "path";

export class DirectoryManager {
  public static createStructure(basePath: string, structure: Record<string, any>) {
    for (const [key, value] of Object.entries(structure)) {
      const fullPath = path.join(basePath, key);

      if (key.includes('.')) {
        const content = value !== null ? String(value) : '';
        fs.writeFileSync(fullPath, content, "utf8");
      } else if (value === null || (typeof value === "object" && !Array.isArray(value))) {
        fs.mkdirSync(fullPath, { recursive: true });
        if (value) {
          DirectoryManager.createStructure(fullPath, value);
        }
      } else {
        fs.writeFileSync(fullPath, value, "utf8");
      }
    }
  }
}
