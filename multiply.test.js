const multiply = require('./multiply');

test('multiply 3 * 2 to equal 6', () => {
  expect(multiply(3, 2)).toBe(6);
});

test('multiply 3 * 3 to equal 9', () => {
  expect(multiply(3, 3)).toBe(9);
});