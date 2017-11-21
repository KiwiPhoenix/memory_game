$(document).ready(function() {
  
});

var memoryCards = [
  'C:\Users\Owner\Desktop\DPL\week2\memory_game\images\black_128gb.jpg',
  'C:\Users\Owner\Desktop\DPL\week2\memory_game\images\King_32gb.jpeg',
  'C:\Users\Owner\Desktop\DPL\week2\memory_game\images\Lex_128gb.jpg',
  'C:\Users\Owner\Desktop\DPL\week2\memory_game\images\Pan_256gb.jpg',
  'C:\Users\Owner\Desktop\DPL\week2\memory_game\images\Playstation_1.jpg',
  'C:\Users\Owner\Desktop\DPL\week2\memory_game\images\San_128gb.jpg',
  'C:\Users\Owner\Desktop\DPL\week2\memory_game\images\Vel_32gb.jpg',
  'C:\Users\Owner\Desktop\DPL\week2\memory_game\images\Verb_16gb.jpeg',
]

var images = []
var firstGuess;
var secondGuess;
var guessNum = 0;

// function to make cards
function makeCards() {
  memoryCards.forEach( function(i) {
// pushing twice to duplicate cards.
    images.push(i);
    images.push(i);
  });
}

// to randomize cards
function randomize() {
// Variables r for random, i for images, l for length
  var r, i, l;
  for (l = images.length; l; l--) {
    r = Math.floor(Math.random() * l);
    i = images[l - 1];
    images[l - 1] = images[r];
    images[r] = i;
  }
}

// Show cards
function showCards() {
  $('#board');
  var cards = images.map( function(image) {
    var card = $('<div class="col-s3></div>')
    card.dataset.value = image;
    return card;       
  })
}

// to check for match
function match() {
  guessNum += 1

  if (firstGuess !== secondGuess) {
    // Not sure how to continue with this.
    
  }
}

//
$(document).on('click', function() {
  // toggle show/hide
  var card
})
