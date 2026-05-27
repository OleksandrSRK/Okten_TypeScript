type CurrencyValue = {currency: string, value: number};

let exchange = (sumUAH: number, currencyValues: CurrencyValue[], exchangeCurrency: string): number | string => {
    for (const item of currencyValues){
        if (exchangeCurrency === item.currency){
            return sumUAH/item.value;
        }
    }

    return "!!!ERROR!!!"
}

console.log(exchange(10000, [{currency:`USD`, value:40}, {currency:`EUR`, value:42}], `USD`));

