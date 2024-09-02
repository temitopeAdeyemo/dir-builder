#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Command-line script to process a YAML file and create a corresponding folder structure
 * in the specified target directory.
 *
 * Usage: npx make-yaml-dir <root-file> <target-folder-to-create-dir>
 *
 * - <root-file>: Path to the YAML file that defines the folder structure.
 * - <target-folder-to-create-dir>: Path to the directory where the folder structure will be created.
 *
 * The script reads the YAML file, processes its contents to generate the necessary directory
 * structure, and outputs a success message indicating the target directory.
 */
const YAMLProcessor_1 = require("./YAMLProcessor");
const args = process.argv.slice(2);
const [rootFile, targetFolder] = args;
if (!rootFile || !targetFolder) {
    console.error('Usage: npx make-yaml-dir <root-file> <target-folder-to-create-dir>');
    process.exit(1);
}
YAMLProcessor_1.YAMLProcessor.processYAMLFile(rootFile, targetFolder);
console.log(`Folder structure created successfully at ${targetFolder}.`);
//# sourceMappingURL=cli.js.map