const { Game } = require('../Classes/Game');

// Test the number of drawn cards
  test('number of cards drawn', () => {
    const game = new Game();
    const hand = game.shuffleAnddrawCards();
    expect(hand.length).toBe(game.numberOfCards);
  });

// Test if the cards is shuffled
  test('shuffle test', () => {
    const game = new Game();
    const cards = game.deck.cards.slice();
    game.shuffle();
    expect(game.deck.cards).not.toEqual(cards);
  });

// Test if there are no duplicates cards in the deck
  test('no duplicates test', () => {
    expect(hasDuplicates()).toBe(false);
  });
  
  function hasDuplicates() {
    var game = new Game();
    game.shuffle(game);
    const cardSet = new Set();
    for (let card of game.deck.cards) {
        const cardString = `${card.value}-${card.suit.name}`;
        if (cardSet.has(cardString)) {
            return true; // Duplicate found
        }
        cardSet.add(cardString);
    }
    return false; // No duplica
  }