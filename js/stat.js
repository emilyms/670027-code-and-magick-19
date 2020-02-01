'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var SHADOW = 10;
var FONT_SIZE = 16;
var MARGIN = 30;
var CHART_HEIGHT = 150;
var COLUMN_WIDTH = 40;
var GAP = 50;
var HEADER = FONT_SIZE*4 + MARGIN;
var PADDING = 5;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  if (arr.length) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  } else {
    return 0;
  }
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + SHADOW, CLOUD_Y + SHADOW, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура, вы победили!', CLOUD_X + MARGIN, MARGIN);
  ctx.fillText('Список результатов:', CLOUD_X + MARGIN, MARGIN + FONT_SIZE);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var basicX = CLOUD_X + GAP + (GAP + COLUMN_WIDTH) * i;
    var barHeight = (CHART_HEIGHT * times[i]) / maxTime;
    var randomSaturation = Math.floor(Math.random() * 100);

    ctx.fillStyle = (names[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'hsl(240, ' + randomSaturation + '%, 50%)';
    ctx.fillRect(basicX, HEADER + CHART_HEIGHT - barHeight, COLUMN_WIDTH, barHeight);

    ctx.fillStyle = '#000';
    ctx.fillText(Math.floor(times[i]), basicX, HEADER + CHART_HEIGHT - barHeight - FONT_SIZE);
    ctx.fillText(names[i], basicX, HEADER + CHART_HEIGHT + PADDING);

  }

};
