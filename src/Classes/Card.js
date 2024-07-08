// Purpose: Card class to represent a single card in a deck of cards.
class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }

    toString() {
        return `${this.value} ${this.suit.symbol}`;
    }
}
exports.Card = Card;
