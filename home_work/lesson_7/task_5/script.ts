type Order = {
    title: string;
    prise: number;
}

class Client {
    constructor (public id: number, private name: string, private surname: string, private email: string, private phone: number, public order: Order[]) {}
}

let clients_array: Client[] = [
    new Client(1, `John0`, `Doe1`, `email1234`, 12345678909, [{title: `juice`, prise: 123}, {title: `apple`, prise: 43}]),
    new Client(2, `John1`, `Doe2`, `email1235`, 12345678998, [{title: `phone`, prise: 15523}]),
    new Client(3, `John2`, `Doe3`, `email1236`, 12345678987, [{title: `phone`, prise: 15523}, {title: `apple`, prise: 43}]),
    new Client(4, `John3`, `Doe4`, `email1237`, 12345678976, [{title: `juice`, prise: 123}]),
    new Client(5, `John4`, `Doe5`, `email1238`, 12345678965, [{title: `tablet`, prise: 49983}, {title: `apple`, prise: 43}, {title: `juice`, prise: 123}, {title: `cake`, prise: 123}]),
    new Client(6, `John5`, `Doe6`, `email1239`, 12345678954, [{title: `juice`, prise: 123}, {title: `tablet`, prise: 49983}, {title: `cake`, prise: 123}]),
    new Client(7, `John6`, `Doe7`, `email1230`, 12345678943, [{title: `cake`, prise: 123}, {title: `apple`, prise: 43}]),
    new Client(8, `John7`, `Doe8`, `email12311`, 12345678932, [{title: `juice`, prise: 123}, {title: `cake`, prise: 123}, {title: `phone`, prise: 15523}]),
    new Client(9, `John8`, `Doe9`, `email12322`, 12345678921, [{title: `cake`, prise: 123}, {title: `phone`, prise: 15523}]),
    new Client(10, `John9`, `Doe0`, `email12333`, 12345678910, [{title: `tablet`, prise: 49983}, {title: `cake`, prise: 123}])
];



let sortClients: Client[] = clients_array.sort((client1: Client, client2: Client): number => client1.order.length - client2.order.length);

console.log(clients_array);




