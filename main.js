var worlds = document.getElementById('worlds');
var characters = document.getElementById('characters');
var num = document.getElementById('numbers');
var special = document.getElementById('special');
var content = document.getElementById('content');

var globalWordCounter = 0;
var globalCharCounter = 0;
var globalNumberCounter = 0;
var globalSpecialCounter = 0;

content.addEventListener('keyup', function(e) {
  wordCounter(e.target.value);
  charCounter(e.target.value);
  numberCounter(e.target.value)
  specialCounter(e.target.value)
});

function isWord(str) {
  var alphaNumericFound = false;
  for (var i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i);
    if ((code > 47 && code < 58) ||
        (code > 64 && code < 91) ||
        (code > 96 && code < 123)) {
      alphaNumericFound = true;
      return alphaNumericFound;
    }
  }
  return alphaNumericFound;
}

function wordCounter(text) {
  var text = content.value.split(' ');
  var wordCount = 0;
  for (var i = 0; i < text.length; i++) {
    if (!text[i] == ' ' && isWord(text[i])) {
      wordCount++;
    }
  }
  globalWordCounter = wordCount;
  worlds.innerText = wordCount;
}

function charCounter(text) {
    var texte = content.value.split('');
    var charactersCount = 0;
    for (var i = 0; i < texte.length; i++) {
      if (!texte[i] == ' ' && isWord(texte[i])) {
          charactersCount++;
      }
    }
    globalCharCounter = charactersCount;
    characters.innerText = charactersCount;      
}

function numberCounter(text) {
  var text = content.value.split('');
  var numberCount = 0;
  for (var i = 0; i < text.length; i++) {
    if (!text[i] == ' ' && parseInt(text[i])) {
      numberCount++;
    }
  }
  globalNumberCounter = numberCount;
  num.innerText = numberCount;
}

function specialCounter(text) {
  var text = content.value.split('');
  var specialCount = 0;
  for (var i = 0; i < text.length; i++) {
    if (!text[i] == ' ' && !parseInt(text[i]) && !text[i].match(/([0-9A-Za-z]+)/)) {
      specialCount++;
    }
  }
  globalSpecialCounter = specialCount;
  special.innerText = specialCount;  
}
