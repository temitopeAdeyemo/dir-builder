#!/usr/bin/env node
import { YAMLProcessor } from './YAMLProcessor';

const args = process.argv.slice(2);
const [rootFile, targetFolder] = args;

if (!rootFile || !targetFolder) {
    console.error('Usage: npx make-yaml-dir <root-file> <target-folder-to-create-dir>');
    process.exit(1);
}

YAMLProcessor.processYAMLFile(rootFile, targetFolder);

console.log(`Folder structure created successfully at ${targetFolder}.`);
