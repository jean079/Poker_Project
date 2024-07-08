const { cleanLibrary } = require("../Functions/cleanLibrary");
const { Deck } = require("./Deck");
const pokerEvaluator = cleanLibrary('poker-evaluator');

// Purpose: Game class to represent a game of poker.
class Game {
    constructor() {
        // Hands are defined although it is not used in the code. The poker-evaluator doesn't need it. It is defined for future use.
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

    shuffleAnddrawCards() {
        // callShuffle the deck and draw the first 'numberOfCards' cards
        this.shuffle();
        return this.deck.cards.slice(0, this.numberOfCards);
    }

    shuffle() {
        // Shuffle the deck
        if (this.shufflemethod === 'normal') {
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
        // Convert Card objects to strings like 'As', 'Kd' (Ace of Spades, King of Diamonds)
        const handStrings = hand.map(card => card.value + card.suit.name);

        // Evaluate the hand
        const handName = pokerEvaluator.evalHand(handStrings).handName;
        return handName;
    }
}
exports.Game = Game;
