(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Ball = (function () {
  function Ball(width, height, x, y) {
    _classCallCheck(this, Ball);

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.size = 20;

    this.speedX = 2;
    this.speedY = 2;

    this.color = 'rgb(255, 0, 0)';
  }

  _createClass(Ball, [{
    key: 'changeColor',
    value: function changeColor() {

      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);

      this.color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
  }, {
    key: 'update',
    value: function update() {

      this.x = this.x + this.speedX;
      this.y = this.y + this.speedY;

      if (this.x > this.width || this.x < 0) {
        this.speedX = -this.speedX;
        this.changeColor();
      }
      if (this.y > this.height || this.y < 0) {
        this.speedY = -this.speedY;
        this.changeColor();
      }
    }
  }, {
    key: 'draw',
    value: function draw(ctx) {

      ctx.save();
      ctx.translate(-(this.size / 2), -(this.size / 2));
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.size, this.size);
      ctx.restore();
    }
  }]);

  return Ball;
})();

exports['default'] = Ball;
module.exports = exports['default'];

},{}],2:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _game = require('./game');

var _game2 = _interopRequireDefault(_game);

var game = new _game2['default']();

game.start();

},{"./game":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ball = require('./ball');

var _ball2 = _interopRequireDefault(_ball);

var WIDTH = 800;
var HEIGHT = 400;

var Game = (function () {
  function Game() {
    _classCallCheck(this, Game);

    var body = window.document.querySelector('body');

    this.canvas = window.document.createElement('canvas');
    this.canvas.width = WIDTH;
    this.canvas.height = HEIGHT;

    this.ctx = this.canvas.getContext('2d');

    body.appendChild(this.canvas);

    this.ball = new _ball2['default'](WIDTH, HEIGHT, WIDTH / 2, HEIGHT / 2);
  }

  _createClass(Game, [{
    key: 'start',
    value: function start() {

      this.tick();
    }
  }, {
    key: 'tick',
    value: function tick() {
      var _this = this;

      this.update();
      this.draw();

      window.setTimeout(function () {
        _this.tick();
      }, 1000 / 60);
    }
  }, {
    key: 'update',
    value: function update() {

      var blue = 'rgb(0, 152, 255)';
      this.ctx.fillStyle = blue;

      this.ball.update();
    }
  }, {
    key: 'draw',
    value: function draw() {

      this.ctx.fillRect(0, 0, 800, 400);

      this.ball.draw(this.ctx);
    }
  }]);

  return Game;
})();

exports['default'] = Game;
module.exports = exports['default'];

},{"./ball":1}]},{},[2]);
