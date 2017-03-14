describe('Javabuzz', function() {
  beforeEach(function() {
    javabuzz = new Javabuzz();
  });

  describe('Given number is', function() {
    it('divisible by 3', function() {
      expect(javabuzz.show(3)).toBe("Java");
    });
  });

  describe('Given number is', function() {
    it('not divisible by 3', function() {
      expect(javabuzz.show(7)).toBe(7);
    });
  });

  describe('Given number is', function(){
    it('divisible by 5', function() {
      expect(javabuzz.show(5)).toBe("Buzz");
    });
  });

  describe('Given number is', function() {
    it('not divisible by 5', function() {
      expect(javabuzz.show(11)).toBe(11);
    });
  });

  describe('Given number is', function() {
    it('divisible by 15', function() {
      expect(javabuzz.show(45)).toBe('Javabuzz')
    });
  });

  describe('Given number is', function() {
    it('not divisible by 15', function() {
      expect(javabuzz.show(46)).toBe(46)
    });
  });

});
