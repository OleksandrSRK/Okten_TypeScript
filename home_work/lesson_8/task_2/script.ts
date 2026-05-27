type FunctionCloneObject = {functionClone: Function, key: string};

function jsonClone<T>(obj: T): T {
    if (obj){
        const functions: Array<FunctionCloneObject> = [];

        for (const key in obj){
            if (typeof obj[key] === `function`){
                const functionClone = (obj[key] as Function).bind({});
                functions.push({functionClone, key});
            }
        }

        const objClone: T = JSON.parse(JSON.stringify(obj));

        for (const func of functions){
            (objClone as any)[func.key] = func.functionClone;
        }
        return objClone;
    }
    throw new Error(`!!!ERROR!!!`);
}

type User = {
    name: string,
    age: number,
    hello(): void
}

let user: User = {
    name: 'Ivan',
    age: 33,
    hello(){
        console.log(`Привіт`);
    }
}


console.log(user);
console.log(jsonClone(user));

