import { readFileSync } from "fs";
import { YAMLParser } from "./YAMLParser";

export class JsonGenerator {
  public static jsonFromYAML(yamlString: string, isPath = false): string {
    if (isPath) yamlString = readFileSync(yamlString, { encoding: "utf8" });

    const parsed = YAMLParser.parseYAML(yamlString);
    return JSON.stringify(parsed, null, 2);
  }
}
