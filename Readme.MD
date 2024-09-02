# yaml-dir-builder

**yaml-dir-builder** is a utility library designed to create directory structures and files based on YAML configurations. It reads YAML data, converts it to JSON, and generates a corresponding directory structure on your filesystem.

## Installation

To install **yaml-dir-builder**, you can use npm:

```sh
npm install yaml-dir-builder
```

# yaml-dir-builder

**yaml-dir-builder** is a utility library for creating directory structures and files based on YAML configurations. It supports converting YAML to JSON and using that JSON to generate directories and files on your filesystem.

## Classes and Methods

### `YAMLProcessor`

Utility class for processing YAML files and generating directory structures.

## Method: `processYAMLFile(yamlFilePathOrString: string, outDir: string, isPath?: boolean): Promise<void>`

Reads a YAML file or YAML content, converts it to JSON, and creates a directory structure.

- **`yamlFilePathOrString`**: The path to the YAML file or YAML content as a string.
- **`outDir`**: The base path where the directory structure should be created.
- **`isPath`**: If `true`, `yamlFilePathOrString` is treated as a file path; otherwise, it is treated as YAML content. Defaults to `false`.

**Example:**

```typescript
import { YAMLProcessor } from 'yaml-dir-builder';

// Process a YAML file and create the directory structure
await YAMLProcessor.processYAMLFile('path/to/config.yaml', 'path/to/output/directory', true);

// Alternatively, process YAML content directly
const yamlContent = `
folders:
  - name: folder1
    files:
      - name: file1.txt
  - name: folder2
    files:
      - name: file2.txt
`;
await YAMLProcessor.processYAMLFile(yamlContent, 'path/to/output/directory');
```


## FileSystemGenerator

**FileSystemGenerator** is a utility class designed for generating directory structures based on JSON definitions. This class helps in creating a file system by interpreting a JSON string that defines the structure of folders and files.

## Method: `static createFromJSON(jsonString: string, outDir: string): void;`

Creates a directory structure based on the provided JSON string.

**Signature:**
```typescript
static createFromJSON(jsonString: string, outDir: string): void

import { FileSystemGenerator } from 'yaml-dir-builder';

const jsonString = JSON.stringify({
  "folder1": {
    "file1.txt": "This is file 1.",
    "subfolder1": {
      "file2.txt": "This is file 2."
    }
  },
  "folder2": {
    "file3.txt": "This is file 3."
  }
}, null, 2);

// Generate directory structure from JSON string
FileSystemGenerator.createFromJSON(jsonString, 'path/to/output/directory');
```

# JsonGenerator

**JsonGenerator** is a utility class for converting YAML data to JSON format. This class provides methods to parse YAML strings or files and convert them into a formatted JSON string.

## Method: `static jsonFromYAML(yamlString: string, isPath?: boolean): string;`

Converts a YAML string or file to a JSON string.

**Signature:**
```typescript
static jsonFromYAML(yamlString: string, isPath?: boolean): string


import { JsonGenerator } from 'yaml-dir-builder';

// Convert YAML content to JSON string
const yamlContent = `
folders:
  - name: folder1
    files:
      - name: file1.txt
`;
const jsonString = JsonGenerator.jsonFromYAML(yamlContent);

console.log(jsonString);

// Convert a YAML file to JSON string
const jsonStringFromFile = JsonGenerator.jsonFromYAML('path/to/config.yaml', true);
console.log(jsonStringFromFile);
