"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonGenerator = void 0;
const fs_1 = require("fs");
const YAMLParser_1 = require("./YAMLParser");
class JsonGenerator {
    static jsonFromYAML(yamlString, isPath = false) {
        if (isPath)
            yamlString = (0, fs_1.readFileSync)(yamlString, { encoding: "utf8" });
        const parsed = YAMLParser_1.YAMLParser.parseYAML(yamlString);
        return JSON.stringify(parsed, null, 2);
    }
}
exports.JsonGenerator = JsonGenerator;
//# sourceMappingURL=JsonGenerator.js.map