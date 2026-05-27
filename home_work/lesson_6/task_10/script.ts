type Card = {
    cardSuit: string,
    color: string,
    value: number | string,
}

function generatorDeckOfCards(): Card[]{
    let cards_array_res: Card[] = [];
    let suit_name: string[] = [`Diamonds`, `Hearts`, `Spades`, `Clubs`]
    let card_name: string[] = [`Jack`, `Queen`, `King`, `Ace`]
    for (let num: number = 6; num <= 14; num += 1) {
        let card_val;

        if (num > 10) {
            card_val = card_name[num - 11];
        }else{
            card_val = num;
        }

        for (let suit_nam: number = 0; suit_nam < suit_name.length; suit_nam += 1) {
            cards_array_res.push({
                cardSuit: suit_name[suit_nam],
                value: card_val,
                color: (suit_name[suit_nam] === `Diamonds` || suit_name[suit_nam] === `Hearts`)?`red`:`black`
            });
        }
    }

    return cards_array_res;
}

let deck_of_cards: Card[] = generatorDeckOfCards();

let foundSpadesAce = (deck: Card[]) => {
    console.log(`Ace Spades:`);
    for (const item of deck) {
        if (item.value === `Ace` && item.cardSuit === `Spades`){
            console.log(item);
        }
    }
}
let foundAll6 = (deck: Card[]) => {
    console.log(`All 6:`);
    for (const item of deck) {
        if (item.value === 6){
            console.log(item);
        }
    }
}
let foundAllRed = (deck: Card[]) => {
    console.log(`All Reds:`);
    for (const item of deck) {
        if (item.color === `red`){
            console.log(item);
        }
    }
}
let foundAllDiamonds = (deck: Card[]) => {
    console.log(`All Diamonds:`);
    for (const item of deck) {
        if (item.cardSuit === `Diamonds`){
            console.log(item);
        }
    }
}
let foundAllClubsFrom9AndUp = (deck: Card[]) => {
    console.log(`All Clubs from 9 and up:`);
    for (const item of deck) {
        if (item.cardSuit === `Clubs` && ((typeof item.value === "number" && item.value > 8) || typeof item.value === "string")) {
            console.log(item);
        }
    }
}


console.log(deck_of_cards);
foundSpadesAce(deck_of_cards);
foundAll6(deck_of_cards);
foundAllRed(deck_of_cards);
foundAllDiamonds(deck_of_cards);
foundAllClubsFrom9AndUp(deck_of_cards);

