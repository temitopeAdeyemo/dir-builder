import { DirectoryManager } from './DirectoryManager';

export class FileSystemGenerator {
    public static createFromJSON(basePath: string, jsonString: string) {
        const structure = JSON.parse(jsonString);
        DirectoryManager.createStructure(basePath, structure);
    }
}
