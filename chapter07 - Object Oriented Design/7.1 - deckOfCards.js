

// Deck & Card

function Card (suit, num) {
  this.suit = suit;
  this.num = num;
}

Card.prototype.gameValue = () => {
  if (typeof this.num === 'number') return this.num;
  if (this.num === 'A') return [1, 11];
  return 10;
};

function Deck () {
  this.cards = [];
  this.newDeck();
}

Deck.prototype.newDeck = () => {
  const suits = ['diamond', 'clover', 'hert', 'spade'];
  const nums = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

  suits.forEach(suit => {
    nums.forEach(num => {
      this.cards.push(new Card(suit, num));
    });
  });
};

Deck.prototype.clear = () => {
  this.cards.length = 0;
};

Deck.prototype.shuffle = () => {
  this.cards.sort(() => Math.random() > 0.5 ? 1 : -1 );
};

Dock.prototype.deal = () => {
  return this.cards.pop();
};

// Dealer & Player

function Dealer () {
  this.deck = new Deck();
  this.hands = [];
}

Dealer.prototype.shuffle = () => {
  this.deck.shuffle();
};

Dealer.prototype.deal = () => {
  return this.deck.deal();
};

Dealer.prototype.receiveCard = card => {
  this.hands.push(card);
};

function Player () {
  this.hands = [];
}

Player.prototype.receiveCard = card => {
  this.hands.push(card);
};

Player.prototype.discardCard = () => {
  this.hands.length = 0;
};

// Blackjack

