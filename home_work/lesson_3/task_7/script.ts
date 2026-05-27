type User = {name: string, age: number, status: boolean};

let users: User[] = [
    {name: `vasya`, age: 31, status: false},
    {name: `petya`, age: 30, status: true},
    {name: `kolya`, age: 29, status: true},
    {name: `olya`, age: 28, status: false},
    {name: `max`, age: 30, status: true},
    {name: `anya`, age: 31, status: false},
    {name: `oleg`, age: 28, status: false},
    {name: `andrey`, age: 29, status: true},
    {name: `masha`, age: 30, status: true},
    {name: `olya`, age: 31, status: false},
    {name: `max`, age: 31, status: true}
];

console.log(`Користувачі зі статусом true`);
for (let item of users) {
    if (item.status) {
        console.log(item);
    }
}

console.log(`Користувачі зі статусом false`);
for (let item of users) {
    if (!item.status) {
        console.log(item);
    }
}

console.log(`Користувачі, які старші за 30 років`);
for (let item of users) {
    if (item.age > 30) {
        console.log(item);
    }
}