var Javabuzz = function() {};

Javabuzz.prototype.show = function(number) {
  if (this._isDivisibleBy(number, 15)) {
    return "Javabuzz";
  }
  else if (this._isDivisibleBy(number, 5)) {
     return "Buzz";
  }
  else if (this._isDivisibleBy(number, 3)) {
    return "Java";
  }
  else {
    return number;
  }
};

Javabuzz.prototype._isDivisibleBy = function(number, divisor) {
  return (number % divisor === 0);
};
