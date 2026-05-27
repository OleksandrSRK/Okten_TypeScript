function stringToarray(str: string): string[]{
    return str.split(' ');
}

let str: string = `Ревуть воли як ясла повні`;
let arr: string[] = stringToarray(str);

console.log(arr);
