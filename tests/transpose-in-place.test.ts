import test from "ava";

import { transposeInPlace } from "../src";

test("transpose empty", (t) => {
  const value: any = [];
  transposeInPlace(value);
  t.deepEqual(value, []);
});

test("transpose data", (t) => {
  const value = [
    ["a", "b", "c", "d"],
    ["e", "f", "g", "h"],
    ["i", "j", "k", "l"],
  ];
  transposeInPlace(value);
  t.deepEqual(value, [
    ["a", "e", "i"],
    ["b", "f", "j"],
    ["c", "g", "k"],
    ["d", "h", "l"],
  ]);

  transposeInPlace(value);
  t.deepEqual(value, [
    ["a", "b", "c", "d"],
    ["e", "f", "g", "h"],
    ["i", "j", "k", "l"],
  ]);
});

test("transpose triangle", (t) => {
  const value = [["a", "b", "c", "d"], ["e", "f", "g"], ["h", "i"], ["j"]];
  t.throws(
    () => {
      transposeInPlace(value);
    },
    {
      instanceOf: TypeError,
    },
  );
});
