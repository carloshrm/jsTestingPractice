const caesarEncode = require("./caesar");

test("testing if a simple string is accurately encoded", () => {
  expect(caesarEncode("encoding test for caesar cypher")).toBe("hqfrglqj whvw iru fdhvdu fbskhu");
});
test("checks if a string can be encoded while keeping the same punctuation, spaces and casing.", () => {
  expect(caesarEncode("-:Defend thE eAst-wAll of the CaStle!!")).toBe(
    "-:Efgfoe uiF fBtu-xBmm pg uif DbTumf!!"
  );
});
