'use strict';

document.querySelector('.setup').classList.remove('hidden');

var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coats = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyes = ['black', 'red', 'blue', 'yellow', 'green'];

var randomNumber = function (max) {
  return Math.floor(Math.random() * max);
};

var getRandomArrayElement = function (array) {
  return array[randomNumber(array.length)];
};

var randomWizards = [];
var createRandomWizards = function (count) {
  for (var i = 0; i < count; i++) {
    randomWizards.push({
      name: getRandomArrayElement(firstNames) + ' ' + getRandomArrayElement(lastNames),
      coatColor: getRandomArrayElement(coats),
      eyesColor: getRandomArrayElement(eyes)
    });
  }
  return randomWizards;
};

createRandomWizards(4);

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
