class Cinderella {
    name: string;
    age: number;
    footSize: number;

    constructor(name: string, age: number, footSize: number) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {
    name: string;
    age: number;
    footSizeFound: number;
    wife?: Cinderella;

    constructor(name: string, age: number, footSizeFound: number) {
        this.name = name;
        this.age = age;
        this.footSizeFound = footSizeFound;
    }
}

const cinderellas: Cinderella[] = [
    new Cinderella("Anna", 18, 33),
    new Cinderella("Maria", 19, 34),
    new Cinderella("Olena", 20, 35),
    new Cinderella("Iryna", 21, 36),
    new Cinderella("Kateryna", 22, 37),
    new Cinderella("Sofia", 23, 38),
    new Cinderella("Natalia", 24, 39),
    new Cinderella("Yulia", 25, 40),
    new Cinderella("Daria", 26, 41),
    new Cinderella("Alina", 27, 42)
];

const prince = new Prince("Artur", 25, 36);


for (const cinderella of cinderellas) {
    if (cinderella.footSize === prince.footSizeFound) prince.wife = cinderella;
}

console.log(prince);

const found: Cinderella|undefined = cinderellas.find(cinderella => cinderella.footSize === prince.footSizeFound);

if (found) {
    prince.wife = found;
}
console.log(prince);



