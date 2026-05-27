type Product = {title: string, price: number, image: string};

let products: Product[] = [
    {
        title: `milk`,
        price: 22,
        image: `https://png.pngtree.com/png-clipart/20240619/original/pngtree-a-bottle-in-fresh-splash-milk-png-image_15366664.png` // ЗМІНЕНО (Оригінальне посилання не працювало)
    },
    {
        title: `juice`,
        price: 27,
        image: `https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg`
    },
    {
        title: `tomato`,
        price: 47,
        image: `https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74`
    },
    {
        title: `tea`,
        price: 15,
        image: `https://thumbs.dreamstime.com/b/black-tea-isolated-white-background-40622400.jpg` // ЗМІНЕНО (Оригінальне посилання не працювало)
    }
];

for (let item of products){
    document.write(`
        <div class="product-card">
            <h3 class="product-title">${item.title}. Price – ${item.price}</h3>
            <img src=${item.image} alt="" class="product-image" style="width: 200px">
        </div>
    `);
}
