const subtract = require('./subtract');

test('subtract 3 - 2 to equal 1', () => {
  expect(subtract(3, 2)).toBe(1);
});

test('subtract 3 - 5 to equal -2', () => {
  expect(subtract(3, 5)).toBe(-2);
});