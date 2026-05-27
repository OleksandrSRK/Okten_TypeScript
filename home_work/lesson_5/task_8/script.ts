type Primitive = boolean | string | number;


let someFunction = (array: Primitive[]): void => {
    document.write(`<ul>`);

    for (const item of array) {
        document.write(`<li>${item}</li>`);
    }

    document.write(`</ul>`);
}

let arr: Primitive[] = [11, 22, 33, 44, 55, 66, 77, 88, 99, "lorem", true];

someFunction(arr);

