const { Card } = require("./Card");

// Purpose: Deck class to represent a deck of cards.
class Deck {
    constructor() {
        this.suits = [
            { name: 'h', symbol: '♥' },
            { name: 'd', symbol: '♦' },
            { name: 'c', symbol: '♣' },
            { name: 's', symbol: '♠' }
        ];
        this.values = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        this.cards = [];

        this.createDeck();
    }

    createDeck() {
        this.cards = [];
        for (let suit of this.suits) {
            for (let value of this.values) {
                this.cards.push(new Card(value, suit));
            }
        }
    }
}

exports.Deck = Deck;


