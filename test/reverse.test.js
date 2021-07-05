const rev = require("../src/reverse");

test("expect the input string to be reversed", () => {
  expect(rev("expect the input string to be reversed")).toBe(
    "desrever eb ot gnirts tupni eht tcepxe"
  );
});
