type Driver = {
    name: string;
    age: number;
}

class Car {
    model: string;
    producer: string;
    year: number;
    max_speed: number;
    engine_volume: number;
    driver?: Driver;


    constructor (model: string, producer: string, year: number, max_speed: number, engine_volume: number) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.max_speed = max_speed;
        this.engine_volume = engine_volume;
    }

    drive (): void {
        console.log(`їдемо зі швидкістю ${this.max_speed} на годину`)
    }
    info (): void {
        for(const key in this) {
            console.log(`${key}: ${this[key]}`);
        }
    }
    increaseMaxSpeed (speedToAdd: number): void {
        if(speedToAdd > 0) this.max_speed = this.max_speed + speedToAdd;
    }
    changeYear (newValue: number): void {
        if(newValue > 1815) this.year = newValue;
    }
    addDriver (driver: Driver): void {
        if(driver) this.driver = driver;
    }
}


let car_array: Car[] = [
    new Car("Camry", "Toyota", 2020, 210, 2.5),
    new Car("Civic", "Honda", 2019, 200, 2.0),
    new Car("Model S", "Tesla", 2022, 250, 0),
    new Car("A6", "Audi", 2018, 240, 3.0),
    new Car("BMW X5", "BMW", 2021, 230, 3.0),
    new Car("Passat", "Volkswagen", 2017, 220, 2.0),
    new Car("Focus", "Ford", 2016, 195, 1.6),
    new Car("Mazda 6", "Mazda", 2019, 215, 2.5),
    new Car("Corolla", "Toyota", 2015, 180, 1.8),
    new Car("Octavia", "Skoda", 2020, 225, 2.0)
];

console.log(`___________________________________________________________`);
car_array[0].drive();

console.log(`___________________________________________________________`);
car_array[1].info();

console.log(`___________________________________________________________`);
console.log(car_array[2].max_speed);
car_array[2].increaseMaxSpeed(50);
console.log(car_array[2].max_speed);

console.log(`___________________________________________________________`);
console.log(car_array[3].year);
car_array[3].changeYear(1999);
console.log(car_array[3].year);

console.log(`___________________________________________________________`);
console.log(car_array[4].driver);
car_array[4].addDriver({name: `Ivan`, age: 30});
console.log(car_array[4].driver);
console.log(`___________________________________________________________`);




