console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];
var theRing = $('<div id="the-ring" class="magic-imbued-jewelry"></div>');
var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.body;

var makeMiddleEarth = function () {
   // create a section tag with an id of `middle-earth`
  var middleEarth = $('<section id="middle-earth"></section>');
    for (var i = 0; i < lands.length; i++) {
      $(middleEarth).append('<article><h1>' + lands[i] + '</h1></article>');
    }
  $('body').append(middleEarth);
   // add each land as an `article` tag
   // inside each `article` tag include an `h1` with the name of the land
   // append `middle-earth` to your document `body`
};

makeMiddleEarth();

var makeHobbits = function () {
  var hobbitList = $('<ul id="hobbitList"></ul>');
  for (var i = 0; i < hobbits.length; i++) {
    hobbitList.append('<li class="hobbit">' + hobbits[i] + '</li>');
  }
  $('article:nth-child(1)').append(hobbitList);
   // display an `unordered list` of hobbits in the shire
      // (which is the second article tag on the page)
   // give each hobbit a class of `hobbit`
};

setTimeout(makeHobbits, 1000);

var keepItSecretKeepItSafe = function () {
  $('li:nth-child(1)').append(theRing);
   // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`
};

setTimeout(keepItSecretKeepItSafe, 2000);

var makeBuddies = function () {
  var aside = $('<aside></aside>');
  var buddiesList = $('<ul id="listofBuddies"></ul>');
    for (var i = 0; i < buddies.length; i++) {
      $(buddiesList).append('<li class="buddies">' + buddies[i] + '</li>');
    }
    $(aside).append(buddiesList);
    $('article:nth-child(2)').append(aside);
   // create an `aside` tag
   // attach an `unordered list` of the `'buddies'` in the aside
   // insert your aside as a child element of `rivendell`
};

setTimeout(makeBuddies, 3000);

var beautifulStranger = function () {
  $('#listofBuddies li:nth-of-type(4)').html('Aragorn');
  buddies[3] = 'Aragon';
   // change the `'Strider'` text to `'Aragorn'`
};

setTimeout(beautifulStranger, 4000);

var leaveTheShire = function () {
  $('article:nth-child(2)').append(hobbitList); // <---- (hobbitList) was originally accidental.
  //it works, although I don't know why.  Theories:  Chrome is storing all my function variables
  //as global variables somehow, or I'm accessing #hobbitList by it's ID

   // assemble the `hobbits` and move them to `rivendell`
};

setTimeout(leaveTheShire, 5000);

var forgeTheFellowShip = function () {
  $('article ul').empty();
  var fellowship = $('<div id="the-fellowship"></div>');
  $('article:nth-child(2)').append(fellowship);
  for (var i = 0; i < buddies.length; i++) {
    $(fellowship).append('<li class="buddies">' + buddies[i] + '</li>');
    console.log(buddies[i]);
    alert(buddies[i] + 'has been added to the fellowship')
  }
  for (var i = 0; i < hobbits.length; i++) {
    $(fellowship).append('<li class="hobbit">' + hobbits[i] + '</li>');
    alert(hobbits[i] + 'has been added to the fellowship')
  }
  $('#the-fellowship li:nth-child(6)').append(theRing);
   // create a new div called `'the-fellowship'` within `rivendell`
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party
};

setTimeout(forgeTheFellowShip, 6000);

var theBalrog = function () {
  $('#the-fellowship li:nth-child(1)').html('Gandalf the White');
  $('#the-fellowship li:nth-child(1)').css('background', 'white');
  $('#the-fellowship li:nth-child(1)').css('border', '2px solid grey');
   // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the // background 'white', add a grey border
};

setTimeout(theBalrog, 7000);


var hornOfGondor = function () {
  alert('The Horn of Gondor has been blown, Boromir has been killed by the Uruk-Hai!');
  $('#the-fellowship li:nth-child(5)').remove();
   // pop up an alert that the horn of gondor has been blown
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
};

setTimeout(hornOfGondor, 8000);

var itsDangerousToGoAlone = function (){
  $('article:nth-child(3)').append('<li id="frodo" class="hobbit">' + hobbits[0] + '</li>');
  $('article:nth-child(3)').append('<li class="hobbit">' + hobbits[1] + '</li>');
  $('#frodo').append(theRing);
  $('#the-fellowship li:nth-child(5)').detach();
  $('#the-fellowship li:nth-child(5)').detach();
  $('article:nth-child(3)').append('<div id="mount-doom"></div>');

   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   // add a div with an id of `'mount-doom'` to `Mordor`
};
setTimeout(itsDangerousToGoAlone, 9000);

var weWantsIt = function () {
  var gollum = $('<div id="gollum"></div>');
  $('article:nth-child(3)').append(gollum);
  $('#frodo:nth-child(1)').empty();
  $('#gollum').append(theRing);
  $('#mount-doom').append(gollum);
  // alert('gollum showed up!')


  // Create a div with an id of `'gollum'` and add it to Mordor
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  // Move Gollum into Mount Doom
};

setTimeout(weWantsIt, 10000);

var thereAndBackAgain = function () {
  $('#mount-doom').empty();
  alert('gollum fell in to mount doom with the ring');
  $('.hobbit').detach().appendTo('article:nth-of-type(1)');
  alert('The hobbits are home in the shire!')

   // remove `Gollum` and `the Ring` from the document
   // Move all the `hobbits` back to `the shire`
};

setTimeout(thereAndBackAgain, 11000);
