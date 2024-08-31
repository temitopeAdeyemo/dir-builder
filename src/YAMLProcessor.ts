import * as fs from 'fs';
import { FileSystemGenerator, JsonGenerator } from '.';

export class YAMLProcessor {
    public static processYAMLFile(yamlFilePath: string, basePath: string) {
        const yamlData = fs.readFileSync(yamlFilePath, 'utf8');
        const jsonString = JsonGenerator.jsonFromYAML(yamlData);
        FileSystemGenerator.createFromJSON(basePath, jsonString);
        console.log('Folder structure created successfully.');
    }
}
