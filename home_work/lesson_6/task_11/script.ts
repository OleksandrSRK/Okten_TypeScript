type Card = {
    cardSuit: string,
    color: string,
    value: number | string,
}

type Accumulator = {
    diamonds: Card[],
    hearts: Card[],
    spades: Card[],
    clubs: Card[]
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

let sort_deck_of_cards: Accumulator = deck_of_cards.reduce((accumulator: Accumulator, card: Card): Accumulator => {
    if(card.cardSuit === `Diamonds`){
        accumulator.diamonds.push(card);
    }else if(card.cardSuit === `Hearts`){
        accumulator.hearts.push(card);
    }else if (card.cardSuit === `Spades`){
        accumulator.spades.push(card);
    }else{
        accumulator.clubs.push(card);
    }
    return accumulator;
}, {diamonds: [], hearts: [], spades: [], clubs: []});


console.log(sort_deck_of_cards);

