type User = {
    id: number,
    name: string,
    age: number
}

function someFunction(array: User[]): void{
    for (const item of array) {
        document.write(`<div>${item.id} ${item.name} ${item.age}</div>`);
    }
}

let arr = [
    {
        id: 1,
        name: "John",
        age: 25
    },
    {
        id: 2,
        name: "Tom",
        age: 35
    },
    {
        id: 3,
        name: "Bob",
        age: 26
    },
    {
        id: 4,
        name: "Ivan",
        age: 28
    }
];

someFunction(arr);

