import { YAMLUtils } from "./YAMLUtils";

export class YAMLParser {
  public static parseYAML(yamlString: string): Record<string, any> {
    const lines = yamlString.trim().split('\n');
    const result: Record<string, any> = {};
    const stack = [{ obj: result, key: null as string | null, level: -1 }];

    lines.forEach((line) => {
      const indent = line.match(/^\s*/)?.[0].length || 0; 
      const content = line.trim();
      if (!content || content.startsWith('#') || content.startsWith('//')) return; 

      const currentLevel = indent / 2;

      while (stack.length > currentLevel + 1) {
        stack.pop();
      }

      let parent = stack[stack.length - 1];
      if (content.endsWith(':') && !content.startsWith('- ')) {
        const key = content.slice(0, -1).trim();
        const newObject: Record<string, any> = {};

        if (Array.isArray(parent.obj[parent.key!])) {
          const lastItem = parent.obj[parent.key!][parent.obj[parent.key!].length - 1];
          lastItem[key] = newObject;
        } else {
          parent.obj[key] = newObject;
          stack.push({ obj: newObject, key, level: currentLevel });
        }
        stack.push({ obj: newObject, key, level: currentLevel });
      } else if (content.startsWith('- ')) {
        const item = content.substring(2).trim();
        const key = parent.key!;
        if (!parent.obj[key] && parent.level < currentLevel) {
          parent.obj[key] = [];
        }

        if (item.includes(':') && parent.level < currentLevel) {
          const [listKey, ...listValue] = item.split(':').map((part) => part.trim());
          const valued = Array.isArray(listValue)? listValue.join(":"): listValue
          const newObject = { [listKey]: valued };
          parent.obj[key].push(newObject);
          stack.push({ obj: newObject, key: listKey, level: currentLevel });
        } else {
          if (parent.level == currentLevel) {
            parent = stack[stack.length - 2];
            const key = parent.key;
            parent.obj[key].push({ [item]: '' });
          } else {
            parent.obj[key].push(item);
          }
        }
      } else {
        const [key, ...value] = content.split(':').map((part) => part.trim());
        const valued = Array.isArray(value)? value.join(":"): value
        if (Array.isArray(parent.obj)) {
          const lastItem = parent.obj[parent.obj.length - 1];
          lastItem[key] = valued;
        } else {
          parent.obj[key] = valued;
        }
      }
    });

    return YAMLUtils.replaceContainerObjectsWithArrays(result);
  }
}