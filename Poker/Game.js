const { cleanLibrary } = require("./cleanLibrary");
const { Deck } = require("./Deck");

class Game {
    constructor() {
        this.hand = [
            "Straight Flush",
            "Four of a Kind",
            "Full House",
            "Flush",
            "Straight",
            "Three of a Kind",
            "Two Pair",
            "One Pair",
            "High Cards",
        ];
        this.numberOfCards = 5;
        this.shufflemethod = 'normal';
        this.deck = new Deck();
    }

    shuffleAnddrawCards(numberOfCards = 5, shufflemethod) {
        this.shuffle(shufflemethod);
        return this.deck.cards.slice(0, numberOfCards);
    }

    shuffle(shufflemethod = 'normal') {
        if (shufflemethod === 'normal') {
            for (let i = this.deck.cards.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [this.deck.cards[i], this.deck.cards[j]] = [this.deck.cards[j], this.deck.cards[i]];
            }
        }

        else {
            // Implement a different shuffle method here
        }
    }

    evaluateHand(hand) {
        const PokerEvaluator = cleanLibrary('poker-evaluator');

        // Convert Card objects to strings like 'As', 'Kd' (Ace of Spades, King of Diamonds)
        const handStrings = hand.map(card => card.value + card.suit.name);

        // Evaluate the hand
        const handName = PokerEvaluator.evalHand(handStrings).handName;
        return handName;
    }
}
exports.Game = Game;
