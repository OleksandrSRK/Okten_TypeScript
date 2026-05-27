function sum(arr: number[]): void{
    let sumRes: number = 0;
    for (const item of arr) {
        sumRes += item;
    }
    console.log(sumRes);
}

let array: number[] = [22, 33, 44, 55, 66, 77, 88, 11, 99];

sum(array);

