const calc = require("../src/calc");

test("adds 1 + 2 to equal 3", () => {
  expect(calc.sum(1, 2)).toBe(3);
});
test("subtracts 3 - 1 to equal 2", () => {
  expect(calc.sub(3, 1)).toBe(2);
});
test("multiplies 2 * 2 to equal 4", () => {
  expect(calc.mul(2, 2)).toBe(4);
});
test("divides 8 by 4 to equal 2", () => {
  expect(calc.div(8, 4)).toBe(2);
});
