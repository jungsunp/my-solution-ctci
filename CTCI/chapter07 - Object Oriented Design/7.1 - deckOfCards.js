

// Deck & Card

function Card(suit, num) {
  this.suit = suit;
  this.num = num;
}

Card.prototype.gameValue = function () {
  if (typeof this.num === 'number') return this.num;
  if (this.num === 'A') return [1, 11];
  return 10;
};

function Deck() {
  this.cards = [];
  this.newDeck();
}

Deck.prototype.newDeck = function () {
  const suits = ['diamond', 'clover', 'hert', 'spade'];
  const nums = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

  suits.forEach(suit => {
    nums.forEach(num => {
      this.cards.push(new Card(suit, num));
    });
  });
};

Deck.prototype.clear = function () {
  this.cards.length = 0;
};

Deck.prototype.shuffle = function () {
  this.cards.sort(() => Math.random() > 0.5 ? 1 : -1);
};

Deck.prototype.deal = function () {
  return this.cards.pop();
};

// Dealer & Player

function Dealer() {
  this.deck = new Deck();
  this.hands = [];
}

Dealer.prototype.shuffle = function () {
  this.deck.shuffle();
};

Dealer.prototype.deal = function () {
  return this.deck.deal();
};

Dealer.prototype.receiveCard = function (card) {
  this.hands.push(card);
  console.log(`Dealer received ${card.num}`);
};

const totalValue = hands => {
  let sum = 0;
  hands.forEach(card => {
    const gameVal = card.gameValue();
    if (typeof gameVal === 'number') {
      sum += gameVal;
    } else {
      if (sum + gameVal[1] <= 21) {
        sum += gameVal[1];
      } else {
        sum += gameVal[0];
      }
    }
  });
  return sum;
};

Dealer.prototype.totalValue = function () {
  return totalValue(this.hands);
};

function Player(name) {
  this.name = name;
  this.hands = [];
}

Player.prototype.receiveCard = function (card) {
  this.hands.push(card);
  console.log(`Player ${this.name} received ${card.num}`);
};

Player.prototype.discardCard = function () {
  this.hands.length = 0;
};

Player.prototype.totalValue = function () {
  return totalValue(this.hands);
};

// Blackjack

function GameTable() {
  this.dealer = new Dealer();
  this.players = [];
}

GameTable.prototype.newPlayer = function (name) {
  if (this.players.length > 4) {
    console.log('Game table is full');
    return;
  }
  this.players.push(new Player(name));
};

GameTable.prototype.runGame = function () {
  if (this.players.length < 1) {
    console.log('No player in game table');
    return;
  }

  console.log('***** Blackjack start *****');
  this.dealer.shuffle();

  console.log();
  console.log('-- Cards are dealt to players --');
  this.players.forEach(player => {
    player.receiveCard(this.dealer.deal());
    player.receiveCard(this.dealer.deal());
  });

  console.log();
  console.log('-- Cards are dealt to dealer --');
  this.dealer.receiveCard(this.dealer.deal());
  this.dealer.receiveCard(this.dealer.deal());

  let finish = false;
  let winners = [];
  const players = new Set();
  this.players.forEach(player => players.add(player));
  while (!finish && players.size) {
    console.log();
    console.log('-- A round starts --');
    players.forEach(player => {
      const tot = player.totalValue();
      if (tot > 21) {
        players.delete(player);
      } else if (tot === 21) {
        winners.push(player);
        finish = true;
      } else {
        player.receiveCard(this.dealer.deal());
      }
    });

    const tot = this.dealer.totalValue();
    if (tot > 21) {
      winners = players;
      finish = true;
    } else if (tot === 21) {
      finsih = true;
    } else {
      this.dealer.receiveCard(this.dealer.deal());
    }

    console.log('-- A round ends --');
  }

  console.log();
  if (winners.length > 0) {
    console.log('-- Players win! --');
    winners.forEach(player => {
      console.log(`Player ${player.name} won!`);
    });
  } else {
    console.log('-- Dealer won! --');
  }

  console.log();
  console.log('***** Blackjack finished *****');
};


// TEST
const table = new GameTable();

table.newPlayer('Jung');
table.newPlayer('Jin');
table.newPlayer('Eric');
table.newPlayer('Hyunho');

/* build until dealing of first hand */
table.runGame();
