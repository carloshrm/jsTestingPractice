const cap = require("../src/capitalize");

test("comment", () => {
  expect(cap("string")).toBe("STRING");
});

test("comment2", () => {
  expect(cap("hey there")).toBe("HEY THERE");
});

test("comment3", () => {
  expect(cap("one more")).toBe("ONE MORE");
});
