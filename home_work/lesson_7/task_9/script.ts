declare global {
    interface Array<T> {
        newFilter(callback: (value: T) => boolean): T[];
        newForEach(callback: (value: T, index: number, array: T[]) => void): void;
    }
}

Array.prototype.newForEach = function <T>(callback: (value: T, index: number, array: T[]) => void): void {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

Array.prototype.newFilter = function <T>(callback: (value: T) => boolean): T[] {
    const filterArr: T[] = [];

    for (const item of this) {
        if (callback(item)) {
            filterArr[filterArr.length] = item;
        }
    }
    return filterArr;
}


const arr: number[] = [11, 22, 33, 44, 77, 55, 88, 66, 99, 101];

arr.newForEach((item: number, index: number) => console.log(item, index));
console.log(`____________________________________`);
console.log(arr.newFilter((item: number) => item % 2 === 0));

