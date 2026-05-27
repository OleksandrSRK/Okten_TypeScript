function someFunction(text: string): void{
    document.write(`
        <ul>
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>
        </ul>
    `);
}

someFunction("lorem ipsum");

