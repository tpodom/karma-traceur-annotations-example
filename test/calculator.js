describe('Calculator', function () {
  var calculator;

  beforeEach(function () {
    calculator = new Calculator();
  });

  it('should have annotations on Calculator', function () {
    expect(Calculator.annotations).toBeDefined();
    expect(Calculator.annotations.length).toEqual(1);
    expect(Calculator.annotations[0] instanceof test).toBeTruthy();
  });

  it('should add', function () {
    expect(calculator.add(2, 2)).toEqual(4);
  });

  it('should subtract', function () {
    expect(calculator.subtract(2, 1)).toEqual(1);
  });
});