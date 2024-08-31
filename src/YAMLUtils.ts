export class YAMLUtils {
    public static replaceContainerObjectsWithArrays(obj: any) {
        for (const key in obj) {
          if (typeof obj[key] === 'object' && obj[key] !== null) {
            for (const innerKey in obj[key]) {
              if (Array.isArray(obj[key][innerKey])) {
                obj[key] = obj[key][innerKey];
                break;
              }
            }
            this.replaceContainerObjectsWithArrays(obj[key]);
          }
        }
        return this.replaceEmptyValuesWithNullAndConvertNumbers(obj);
      }
      
    public static replaceEmptyValuesWithNullAndConvertNumbers(obj: any) {
        if (typeof obj === 'object' && obj !== null) {
          for (const key in obj) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
              if (Array.isArray(obj[key]) && obj[key].length === 0) {
                obj[key] = null;
              } else if (Object.keys(obj[key]).length === 0) {
                obj[key] = null;
              } else {
                this.replaceEmptyValuesWithNullAndConvertNumbers(obj[key]);
              }
            } else if (obj[key] === '') {
              obj[key] = null;
            } else if (typeof obj[key] === 'string' && !isNaN(obj[key as string])) {
              obj[key] = Number(obj[key]);
            }
          }
        }
        return obj;
      }

      
}
