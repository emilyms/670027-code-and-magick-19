'use strict';

document.querySelector('.setup').classList.remove('hidden');

var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coats = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyes = ['black', 'red', 'blue', 'yellow', 'green'];

var randomNumber = function (array) {
  return Math.floor(Math.random() * array.length);
};

var randomWizards = [];
var createRandomWizards = function () {
  for (var i = 0; i < 4; i++) {
    var wizard = {};
    wizard.name = firstNames[randomNumber(firstNames)] + ' ' + lastNames[randomNumber(lastNames)];
    wizard.coatColor = coats[randomNumber(coats)];
    wizard.eyesColor = eyes[randomNumber(eyes)];
    randomWizards.push(wizard);
  }
  return randomWizards;
};

createRandomWizards();

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};


var fragment = document.createDocumentFragment();
var similarListElement = document.querySelector('.setup-similar-list');

var insertWizards = function (wizards) {
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};

insertWizards(randomWizards);
document.querySelector('.setup-similar').classList.remove('hidden');