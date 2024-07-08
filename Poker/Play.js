const { Game } = require('./Game');

async function Play(numberOfCards, shufflemethod) {
    // Create a new game
    const game = new Game();
    
    //Simulate shuffling the deck
    for (let i = 0; i < 3; i++) {
        console.log("Shuffling the deck...");
        await new Promise(resolve => setTimeout(resolve, 1000)); // wait for 1000 milliseconds (1 second)
    }

    // Draw first 5 cards from the deck after shuffling
    const hand = game.shuffleAnddrawCards(numberOfCards, shufflemethod);

    // Output the drawn cards
    console.log('Your hand:');
    hand.forEach(card => {
        console.log(card.toString());
    });
     // Evaluate the hand
     const handName = game.evaluateHand(hand);
     
     // Output the evaluated hand
     console.log(`You have: ${handName}`);
}
 
Play();