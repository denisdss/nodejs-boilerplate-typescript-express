export const minimist = (arr:any):Object => {
    return arr.reduce((acc: Record<string, string>, item: string) => {
        const [key, value] = item.split('=');
        acc[key] = value;
        return acc;
      }, {});
}