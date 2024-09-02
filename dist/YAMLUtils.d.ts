/**
 * Utility class for processing and transforming YAML data structures.
 */
export declare class YAMLUtils {
    /**
     * Replaces objects that have the same key and value with arrays.
     *
     * This method traverses the given object and replaces any object where a key and its corresponding
     * value are the same with an array. After this replacement, it recursively processes nested objects.
     *
     * @param obj - The object to process. Can be deeply nested.
     * @returns The processed object with certain objects replaced by arrays.
     */
    static replaceContainerObjectsWithArrays(obj: any): any;
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
    static replaceEmptyValuesWithNullAndConvertNumbers(obj: any): any;
}
