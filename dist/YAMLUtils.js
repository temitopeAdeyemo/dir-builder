"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YAMLUtils = void 0;
/**
 * Utility class for processing and transforming YAML data structures.
 */
class YAMLUtils {
    /**
     * Replaces objects that have the same key and value with arrays.
     *
     * This method traverses the given object and replaces any object where a key and its corresponding
     * value are the same with an array. After this replacement, it recursively processes nested objects.
     *
     * @param obj - The object to process. Can be deeply nested.
     * @returns The processed object with certain objects replaced by arrays.
     */
    static replaceContainerObjectsWithArrays(obj) {
        for (const key in obj) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                for (const innerKey in obj[key]) {
                    if (Array.isArray(obj[key][innerKey]) && innerKey == key) {
                        obj[key] = obj[key][innerKey];
                        break;
                    }
                }
                this.replaceContainerObjectsWithArrays(obj[key]);
            }
        }
        return this.replaceEmptyValuesWithNullAndConvertNumbers(obj);
    }
    /**
     * Replaces empty arrays and objects with `null`, and converts string numbers to actual numbers.
     *
     * This method processes the given object to replace:
     * - Empty arrays with `null`.
     * - Empty objects with `null`.
     * - Empty string values with `null`.
     * - String representations of numbers with actual number values.
     *
     * After processing, it recursively handles nested objects.
     *
     * @param obj - The object to process. Can be deeply nested.
     * @returns The processed object with empty values replaced by `null` and strings converted to numbers.
     */
    static replaceEmptyValuesWithNullAndConvertNumbers(obj) {
        if (typeof obj === 'object' && obj !== null) {
            for (const key in obj) {
                if (typeof obj[key] === 'object' && obj[key] !== null) {
                    if (Array.isArray(obj[key]) && obj[key].length === 0) {
                        obj[key] = null;
                    }
                    else if (Object.keys(obj[key]).length === 0) {
                        obj[key] = null;
                    }
                    else {
                        this.replaceEmptyValuesWithNullAndConvertNumbers(obj[key]);
                    }
                }
                else if (obj[key] === '') {
                    obj[key] = null;
                }
                else if (typeof obj[key] === 'string' && !isNaN(obj[key])) {
                    obj[key] = Number(obj[key]);
                }
            }
        }
        return obj;
    }
}
exports.YAMLUtils = YAMLUtils;
//# sourceMappingURL=YAMLUtils.js.map