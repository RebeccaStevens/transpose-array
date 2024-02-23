import test from "ava";

import transpose from "../src";

test("transpose empty", (t) => {
  const transposed = transpose([]);
  t.deepEqual(transposed, []);
});

test("transpose data", (t) => {
  const value = [
    ["a", "b", "c", "d"],
    ["e", "f", "g", "h"],
    ["i", "j", "k", "l"],
  ];

  const transposed = transpose(value);
  t.deepEqual(transposed, [
    ["a", "e", "i"],
    ["b", "f", "j"],
    ["c", "g", "k"],
    ["d", "h", "l"],
  ]);

  const transposedAgain = transpose(transposed);
  t.deepEqual(transposedAgain, value);
});

test("transpose triangle", (t) => {
  t.throws(
    () => {
      transpose([["a", "b", "c", "d"], ["e", "f", "g"], ["h", "i"], ["j"]]);
    },
    {
      instanceOf: TypeError,
    },
  );
});
