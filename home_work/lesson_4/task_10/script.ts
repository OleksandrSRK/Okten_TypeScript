function someFunction(array: number[]): void {
    let min: number = array[0];
    for (const item of array) {
        if (min > item) {
            min = item;
        }
    }
    console.log(min);
}

let arr: number[] = [22, 33, 44, 55, 66, 77, 88, 11, 99];

someFunction(arr);

