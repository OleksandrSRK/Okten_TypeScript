type Author = {
    name: string
    age: number
}
type Book = {
    title: string,
    pageCount: number,
    genre: string,
    authors: Author []
}

let book_1: Book = {
    title: "Three Musketeers",
    pageCount: 770,
    genre: "novel",
    authors: [
        {name: "author_01", age: 66},
        {name: "author_02", age: 44}
    ]
};
let book_2book_1: Book = {
    title: "Don Quixote",
    pageCount: 505,
    genre: "novel",
    authors: [
        {name: "author_05", age: 46},
        {name: "author_06", age: 64},
        {name: "author_07", age: 75}
    ]
};
let book_3book_1: Book = {
    title: "JavaScript",
    pageCount: 404,
    genre: "scientific",
    authors: [
        {name: "author_09", age: 43},
        {name: "author_10", age: 53}
    ]
};

