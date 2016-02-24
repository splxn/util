var util = require('util');

function Animal(name) {
  this.name = name;
}

Animal.prototype.walk = function() {
  console.log("Ходит " + this.name);
};

function Rabbit(name) {
  this.name = name;
}

util.inherits(Rabbit, Animal);

Rabbit.prototype.run = function() {
  console.log("Бегает " + this.name);
};

var rabbit = new Rabbit("наш кролик");
rabbit.walk();
rabbit.run();
