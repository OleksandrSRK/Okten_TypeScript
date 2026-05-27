class User {
    id: number;
    name: string;
    surname: string;
    email: string;
    phone: number

    constructor (id: number, name: string, surname: string, email: string, phone: number) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}

let users_array: User[] = [
    new User(4, `John3`, `Doe4`, `email1237`, 12345678976),
    new User(9, `John8`, `Doe9`, `email12322`, 12345678921),
    new User(6, `John5`, `Doe6`, `email1239`, 12345678954),
    new User(5, `John4`, `Doe5`, `email1238`, 12345678965),
    new User(3, `John2`, `Doe3`, `email1236`, 12345678987),
    new User(10, `John9`, `Doe0`, `email12333`, 12345678910),
    new User(7, `John6`, `Doe7`, `email1230`, 12345678943),
    new User(8, `John7`, `Doe8`, `email12311`, 12345678932),
    new User(1, `John0`, `Doe1`, `email1234`, 12345678909),
    new User(2, `John1`, `Doe2`, `email1235`, 12345678998)
];


function sortUsers (user1: User, user2: User): number {
    return user1.id - user2.id;
}

console.log(users_array.sort(sortUsers));




