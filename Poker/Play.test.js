const { Game } = require('./Game');

  test('number of cards drawn', () => {
    const game = new Game();
    const hand = game.shuffleAnddrawCards(5);
    expect(hand.length).toBe(5);
  });

  test('shuffle test', () => {
    const game = new Game();
    const cards = game.deck.cards.slice();
    game.shuffle();
    expect(game.deck.cards).not.toEqual(cards);
  });

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