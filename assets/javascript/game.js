$(document).ready(function() {

crystals = ['assets/images/crystal1.png','assets/images/crystal2.png','assets/images/crystal3.png','assets/images/crystal4.png'];

var counter = 0;
var wins = 0;
var losses = 0;

crystalValue();
newGame();


function crystalValue() {

  var numbers = []
  //set a random value to each crystal in array (4), with a math value ceiling of 12.  (1-12)
    while(numbers.length < 4){
      var randomNumber = Math.ceil(Math.random()*12)
//going thru numbers array, when a random number is generated, and is in array, break out of function and console log.
//if number is not found, generate a random number.
      var numFound = false;
      for (var i=0; i< numbers.length; i++){
      if (numbers[i] == randomNumber){
      numFound = true; break
      }
      }
      if(!numFound)numbers[numbers.length]=randomNumber;
    }
  console.log(numbers);
//for each item in array, add the following in a div:
//attribute of a number value, the image source, alt name and class name.
    for (i = 0; i < numbers.length; i++) {
      var imageCrystal = $('<img>');
      imageCrystal.attr('data-num', numbers[i]);
      imageCrystal.attr('src', crystals[i]);
      imageCrystal.addClass('crystalImage')
      $('#crystals').append(imageCrystal);
      }
}


//user score in html gets set to counter, at this point it is zero.
function newGame() {
  counter = 0;
  $('#userScore').text(counter);
  function randomCompInt(min,max){
// a random number generates with a value with a min max
  return Math.floor(Math.random()*(max-min+1)+min);
}
//targetNumber is the desired range for random number between 19-120
    var targetNumber = randomCompInt(19,120);
    $('.value').text(targetNumber);
//The crystal images, when clicked will total and parse (add together) the total number of clicks by its random number value
//total then gets set in counter.
    $('.crystalImage').on('click', function(){
    counter = counter + parseInt($(this).data('num'));
//user score is updated, music plays
    $('#userScore').text(counter);
    var audio = new Audio("assets/audio/cashregister.mp3");
    audio.play();
//if counter is equal to targetNumber, You win pops up in html, music plays
//wins go up by 1
//crystalValue function runs, game resets crystal values and attributes
//newGame function runs, counter goes to 0, new number is generated, and crystal values are added when clicked.
    if (counter === targetNumber){
    $('.status').text('You win. Good job!');
    var audio = new Audio("assets/audio/win.mp3");
    audio.play();
    wins ++;
    $('#win').text(wins);
    console.log(wins)
    $('#crystals').empty();
    crystalValue();
    newGame();
//if counter is over targetNumber, You lose pops up in html, music plays
//losses goes up by 1
//crystalValue function runs, game resets crystal values and attributes
//newGame function runs, counter goes to 0, new number is generated, and crystal values are added when clicked.
  } else
    if ( counter >= targetNumber){
    $('.status').text('You lose! Try again?')
    var audio = new Audio("assets/audio/fail.mp3");
    audio.play();
    losses ++;
    $('#loss').text(losses);
    console.log(losses)
    $('#crystals').empty();
    crystalValue();
    newGame();
    }
  });
}

});




